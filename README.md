Ice Cream Store – Node.js + Docker + AWS EC2
Overview
This project is a Node.js application that can be deployed using Docker on AWS EC2.
This guide outlines the steps to set up the project locally and deploy it to AWS.

Prerequisites
Node.js – Download Here

NPM – Comes with Node.js (make sure it’s the latest version)

Docker – Install Here

AWS Account – To create and manage EC2 instances

DockerHub Account – To push and store your Docker image

Local Setup
1. Setup Node.js Application
Open your terminal and navigate to your project directory:

bash
Copy
Edit
npm init -y
npm install express
2. Run the Application
Start the Node.js app:

bash
Copy
Edit
node app.js
Your application will be available at:
http://localhost:3000

Deployment Steps
1. Create Docker Image
bash
Copy
Edit
docker build -t <your-dockerhub-username>/ice-cream-store .
2. Push Image to DockerHub
bash
Copy
Edit
docker login
docker push <your-dockerhub-username>/ice-cream-store
3. Create AWS EC2 Instance
Log in to AWS Management Console

Launch a new EC2 instance (Amazon Linux 2 / Ubuntu)

Allow port 3000 in the Security Group

4. Install Docker on AWS EC2 Instance
SSH into your instance:

bash
Copy
Edit
ssh -i "YourKey.pem" ec2-user@<EC2-Public-IP>
Install Docker:

bash
Copy
Edit
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -aG docker ec2-user
(Logout and log back in for permissions to take effect)

5. Pull the Docker Image
bash
Copy
Edit
docker pull <your-dockerhub-username>/ice-cream-store
6. Run the Container with Port Binding
bash
Copy
Edit
docker run -d -p 3000:3000 <your-dockerhub-username>/ice-cream-store
7. Access Your Website
Open your browser and visit:

cpp
Copy
Edit
http://<EC2-Public-IP>:3000
License
This project is licensed under the MIT License – see the LICENSE file for details.
