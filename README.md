# 🍦 Ice Cream Store – Node.js + Docker + AWS EC2

## 📜 Overview
This project is a Node.js application that can be deployed using Docker on AWS EC2.  
This guide outlines the steps to set up the project locally and deploy it to AWS.

## ✅ Prerequisites
- 🖥 **Node.js** – Download and install  
- 📦 **NPM** – Comes bundled with Node.js (ensure it’s updated)  
- 🐳 **Docker** – Install Docker Desktop  
- ☁ **AWS Account** – To launch EC2 instances  
- 📤 **DockerHub Account** – To push and store Docker images  


## 💻 Local Setup

### 1️⃣ Setup Node.js Application  
Open your terminal and navigate to your project directory, then run: 
```
npm init -y
npm install express
```
**2️⃣ Run the Application** 
```
Start the Node.js app with:
node app.js
Your application will be running at:
🌐 http://localhost:3000
```
**🚀 Deployment Steps**
**1️⃣ Create Docker Image**
```docker build -t sandyzayn/ice-cream-store .```

**2️⃣ Push Image to DockerHub**
```
docker login
docker push sandyzayn/ice-cream-store
```
**3️⃣ Create AWS EC2 Instance**
```
Log in to AWS Management Console
Launch a new EC2 instance (Amazon Linux 2 / Ubuntu)
Allow port 3000 in the Security Group
```
**4️⃣ Install Docker on AWS EC2 Instance**
```
SSH into your instance:
ssh -i "DevOps.pem" ec2-user@ec2-3-15-184-109.us-east-2.compute.amazonaws.com
```
```
Install Docker:
sudo yum update -y
sudo yum install docker -y
sudo service docker start
```
**5️⃣ Pull the Docker Image**
```
docker pull sandyzayn/ice-cream-store
```
**6️⃣ Run the Container with Port Binding**
```
docker run -d -p 80:3000 sandyzayn/ice-cream-store
The inbound rules of HTTP set to 80 
```
**7️⃣ Access Your Website**
```
Open your browser and navigate to:
🌐 http://3.15.184.109/:3000
or else we can directly use http://3.15.184.109/
```
**IMAGES SHOWS THE PROOF OF EXECUTION THAT RUN BOTH 3000 AND AS WELL AS IN PUBLIC IP OF EC2**
<img width="1913" height="821" alt="Image" src="https://github.com/user-attachments/assets/abb01392-ddb1-490a-b8e9-e8bac6aecdd1" />

<img width="1891" height="905" alt="Image" src="https://github.com/user-attachments/assets/45e5e616-f07f-47cd-aed8-6df6ba15a9b5" />

<img width="1568" height="723" alt="Image" src="https://github.com/user-attachments/assets/598e033a-a8ee-4d4b-847f-79ad6fa2c5f3" />

<img width="1910" height="833" alt="Image" src="https://github.com/user-attachments/assets/68dc4f1f-16b2-47ed-ad2c-b5a63379f135" />
