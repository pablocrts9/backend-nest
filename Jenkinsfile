pipeline {
    agent any
    // escenarios -> escenario -> pasos
     environment {
        NPM_CONFIG_CACHE= "${WORKSPACE}/.npm"
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
                stage("ejecucion de prueba"){
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                stage("ejecucion de prueba"){
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}