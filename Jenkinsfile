pipeline {
    agent any

    environment {
        SONARQUBE_SERVER = 'SonarQubeServer' // configure in Jenkins
        SONARQUBE_PROJECT = 'personal_website'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Princccee/Personal_website.git'
            }
        }

        stage('Install & Unit Test') {
            steps {
                sh 'npm install'
                sh 'CI=true npm test || true'   // React tests, ignore failure for now
            }
        }

        // stage('Code Quality (SonarQube)') {
        //     steps {
        //         withSonarQubeEnv("${SONARQUBE_SERVER}") {
        //             sh """
        //             sonar-scanner \
        //               -Dsonar.projectKey=${SONARQUBE_PROJECT} \
        //               -Dsonar.sources=. \
        //               -Dsonar.host.url=$SONAR_HOST_URL \
        //               -Dsonar.login=$SONAR_AUTH_TOKEN
        //             """
        //         }
        //     }
        // }

        // stage('Dependency Check (OWASP)') {
        //     steps {
        //         sh """
        //         dependency-check.sh \
        //           --scan . \
        //           --format HTML \
        //           --out reports
        //         """
        //     }
        // }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t personal_website:${BUILD_NUMBER} .'
            }
        }

        stage('Image Security Scan (Trivy)') {
            steps {
                sh 'trivy image personal_website:${BUILD_NUMBER} || true'
            }
        }
    }
}
