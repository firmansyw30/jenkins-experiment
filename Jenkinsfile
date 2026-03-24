pipeline {
    
    agent any

    stages {
        stage('Trigger Build') {
            steps {
                script {
                    awsCodeBuild(
                        projectName: '<your-codebuild-project-name>',
                        credentialsType: 'jenkins',
                        credentialsId: '<your-codebuild-credentials-id-that-stored-in-jenkins>',
                        region: '<your-codebuild-region>',
                        sourceControlType: 'project'
                    )
                }
            }
        }

        stage('Notify') {
            steps {
                echo 'Build finished'
            }
        }
    }
}
