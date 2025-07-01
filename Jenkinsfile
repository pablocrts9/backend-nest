pipeline {
    agent any
    // escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
        dockerImagePrefix = "us-west1-docker.pkg.dev/lab-agibiz/docker-repository"
        registry = "https://us-west1-docker.pkg.dev"
        registryCredentials = "a3a04b7c-19f3-48d8-9e84-7d8f40143286"
    }
    stages{
        stage ("saludo a usuario") {
            steps {
                sh 'echo "comenzado mi pipeline"'
            }
        }
        stage ("salida de los saludos a usuario") {
            steps {
                sh 'echo "saliendo de este grupo de escenarios"'
            }
        }
        stage ("proceso de build y test") {
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages {
                stage("instalacion de dependencias"){
                    steps {
                        sh 'npm ci'
                    }
                }
                stage("ejecucion de pruebas"){
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                stage("construccion de la aplicacion"){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
         stage ("build y push de imagen docker"){
            steps {
                script {
                    docker.withRegistry("${registry}", registryCredentials ){
                        sh "docker build -t backend-nest-pcc ."
                        sh "docker tag backend-nest-pcc ${dockerImagePrefix}/backend-nest-pcc"
                        sh "docker tag backend-nest-pcc ${dockerImagePrefix}/backend-nest-pcc:${BUILD_NUMBER}"
                        sh "docker push ${dockerImagePrefix}/backend-nest-pcc"
                        sh "docker push ${dockerImagePrefix}/backend-nest-pcc:${BUILD_NUMBER}"
                    }
                }
            }
        }
        stage ("actualizacion de kubernetes"){
            agent {
                docker {
                    image 'alpine/k8s:1.30.2'
                    reuseNode true
                }
            }
            steps {
                withKubeConfig([credentialsId: 'gcp-kubeconfig']){
                    sh "kubectl -n lab-cmd set image deployments/backend-nest-pcc backend-nest-pcc=${dockerImagePrefix}/backend-nest-pcc:${BUILD_NUMBER}"
                }
            }
        }
    }
}