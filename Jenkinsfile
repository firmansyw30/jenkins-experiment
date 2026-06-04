pipeline {
    
    agent any

    environment {
        AWS_REGION = '<your-codebuild-region>'
        CODEBUILD_PROJECT = '<your-codebuild-project-name>'
        CODEBUILD_PROJECT_REGION = '<your-codebuild-project-region>'
        CODEBUILD_CREDENTIALS_ID = '<your-codebuild-credentials-id-that-stored-in-jenkins'> // AWS Credentials to run Codebuild (like Access Key & Secret Key)
        // DISCORD_WEBHOOK_URL = credentials('<your-discord-channel-url>') // Make Sure Discord Pipeline Notifier is installed (If required)
    }

    stages {
        stage('Trigger Build') {
            steps {
                script {
                    awsCodeBuild(
                        projectName: env.CODEBUILD_PROJECT,
                        credentialsType: 'jenkins',
                        credentialsId: env.CODEBUILD_CREDENTIALS_ID,
                        region: env.CODEBUILD_PROJECT_REGION,
                        sourceControlType: 'project',
                        sourceVersion: env.GIT_BRANCH
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
