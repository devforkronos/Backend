# VPS Installation/Setup

We use [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge) to host our website and so can you, Sign-up from our link to get a free $100 bonus and help us get $25 to keep thsi site running.

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg)](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

## Requirements

- MySQL
- Nginx
- Node.js v16+

## Installation

```shell
mkdir /root/nodejs
cd /root/nodejs
rm -r BloxSafe

git clone https://github.com/jareer12/BloxSafe.git
rm -r /var/www/BloxSafe
mv ./BloxSafe/Client /var/www/BloxSafe
cd /var/www/BloxSafe && npm install && npm run build

cd ./BloxSafe/Backend
npm install
mv .env.test .env

killall nginx
nginx

```

Once you run this shell script you will have two new directories, `/var/www/BloxSafe` for frontend and `/root/nodejs/BloxSafe` for backend. The frontend will run via the script but to start the backend you will have to follow the following steps.

```shell
nano .env ## Open the .env file to edit(linux)
```

Once you are in the `.env` file, configure the settings. Add mysql credentials add an encryption key etc. Then start the backend server by the commands below. You can use npm packages like [PM2](https://www.npmjs.com/package/pm2) or [Forever](https://www.npmjs.com/package/forever) to run the backend 24/7, for demonstration purposes I'll use forever(recommended).

```shell
## Install the package globally
npm install forever -g
```

```shell
## Basic Start
node /root/nodejs/BloxSafe
## With forever
forever start /root/nodejs/BloxSafe/index.js
```
