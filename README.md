# XDrinks-frontend

## Requirements

- npm 10.0.0
- Node.js v18.17.1

## Getting Started

First, run the install command:

```bash
npm install
```
Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Server

First, pull the git repo:
```bash
git clone git@github.com:RedMotionMedia/xdrinks-frontend.git
# or 
git pull
```
Second, run the build command to generate a production optimized version:
```bash
npm run build
```
Third, run the start command with or no output:
```bash
sudo nohup npm run start &
# or
sudo npm run start 
```
If you want to start it on a different port try:
```bash
sudo nohup npm run start -- --port 3100 & # Without output
# or 
sudo npm run start -- --port 3100 # With output
```