// pipeline {
//     // Wajib ada. Gunakan 'built-in' agar berjalan di Jenkins Controller, 
//     // sehingga EC2 Spot tidak akan digunakan.
//     agent { label 'built-in' } 
    
//     stages {
//         stage('Trigger AWS CodeBuild') {
//             steps {
//                 script {
//                     // Jenkins mengirim API call ke AWS untuk memulai proses di CodeBuild
//                     def buildResult = awsCodeBuild(
//                         projectName: 'test-codebuild-jenkins-integration',
//                         credentialsId: 'jenkins-codebuild-access-credentials',
//                         credentialsType: 'keys',  
//                         region: 'ap-southeast-3',
//                         sourceControlType: 'project' // Menggunakan source dari konfigurasi AWS
//                     )
//                     echo "Build completed on AWS: ${buildResult.getArn()}"
//                 }
//             }
//         }
        
//         stage('Print') {
//             steps {
//                 // Ini tetap berjalan di mesin Jenkins (Controller), bukan di AWS
//                 echo 'Hello World from Jenkins'  
//             }
//         }
        
//         stage('Verification') {
//             steps {
//                 echo 'The pipeline works!'
//             }
//         }
//     }
// }

pipeline {
    
    agent any

    stages {
        stage('Trigger Build') {
            steps {
                script {
                    awsCodeBuild(
                        projectName: 'test-codebuild-jenkins-integration',
                        credentialsType: 'jenkins',
                        credentialsId: 'jenkins-codebuild-access-credentials',
                        region: 'ap-southeast-3',
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