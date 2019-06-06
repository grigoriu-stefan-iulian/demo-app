### add sudo in front of commands in case you run intro problems

# demo-app

# github-test

Version Control System

# Configure Git

git config --global user.name "Your name"

git config --global user.email "Your email"

# SSH (auto auth)

# Check if u already have SSh set up:

ls ~/.ssh

# Create SSH

ssh -keygen -t rsa -b 4096 -C "your email"

# Copy the SSH Key

clip < ~/.ssh/id_rsa.pub

# Go to Github > Settings > SSH keys > New SSH Key > Title + Paste the SSH

ssh -T git@github.com //to confirm you are logged in

# Initialize Git in an existing project

git init //adds .git folder

# To set where git will push the changes create a new repository, copy the SSH here

git remote add origin ssh_url_here

# Clone a repository from GitHub

git clone (**ssh_url**) // adds .git and remote

# Track changes to files from Working directory to Index/Staging (when files are in the index the changes are tracked)

git add

# Add as official version to Head (the most recently commited version of our code)

git commit -m "message"

# Push to GitHub

git push

# If changes need to be pulled

git pull

# Create a new branch and Switch to it

git checkout -b "name"

# Switch branch

git checkout master

# Merge changes from branch \*\* You need to be in the branch you want to commit to

git merge branch_name
