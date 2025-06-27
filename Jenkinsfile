pipeline {
    agent any

    stages {
        stage ("saludo a usuario") {
            steps {
                sh 'echo "Hola a todos desde el pipeline"'
            }
        }
        stage ("salida de los saludos a usuario") {
            steps {
                sh 'echo "Saliendo de este grupo de escenarios"'
            }
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
                steps{
                    sh 'npm ci'
                } 
            }
        }
    }

}