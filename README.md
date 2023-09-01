# XDrinks-frontend

## Getting Started

First, run the install command:

```bash
npm install
```
Second, run the development server:

```bash
npm run dev
# or
yarn dev
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
# or 
yarn build
```
Third, run the start command with or no output:
```bash
nohup npm run start &
# or
npm run start 
# or
yarn start
```
If you want to start it on a different port try:
```bash
nohup npm run start -- --port 3030 &
# or
npm run start -- --port 3030
```