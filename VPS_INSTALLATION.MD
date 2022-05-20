# [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge) Installation/Setup

In this documentation you will learn to deploy BloxSafe on [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge). We use [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge) to host our website and so can you, Sign-up from our link to get a free $100 bonus and help us get $25 to keep this project running.
[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

## Requirements

- MySQL
- Nginx
- Node.js v16+

## Installation

Create a Ubuntu-based droplet on [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge). Once you have created a droplet on [DigitalOcean](https://www.digitalocean.com/?refcode=bcc56aadc190&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge) and are in your Ubuntu machine run the following script.

```shell

mkdir /root/nodejs

cd /root/nodejs
rm -r BloxSafe

git clone https://github.com/jareer12/BloxSafe.git

rm -r /var/www/BloxSafe
mv ./BloxSafe/Client /var/www/BloxSafe

cd /var/www/BloxSafe
rm -r ./bin

npm install
npm run build

cd /root/nodejs/BloxSafe/Backend

npm install
npm run build

mv .env.test .env

killall nginx
nginx

```

Once you run this shell script you will have two new directories, `/var/www/BloxSafe` for frontend and `/root/nodejs/BloxSafe` for backend. The frontend will run via the script but to start the backend you will have to follow the following steps.

```shell
cd /root/nodejs/BloxSafe/Backend
nano .env ## Open the .env file to edit(linux)
```

Once you are in the `.env` file, configure the settings. Add mysql credentials add an encryption key etc. Then start the backend server by the commands below. You can use npm packages like [PM2](https://www.npmjs.com/package/pm2) or [Forever](https://www.npmjs.com/package/forever) to run the backend 24/7, for demonstration purposes I'll use forever(recommended).

```shell
## Install the package globally
npm install forever -g
```

```shell
## Test the Backend(optional) - CTRL + C to kill the node process
node .
## Basic Start
node /root/nodejs/BloxSafe
## With forever
forever start /root/nodejs/BloxSafe/index.js
```

If you are stuck or any problem occurs, you can join my [Discord server](https://discord.gg/M6bn9xtrhC) server or [open an Issue](https://github.com/jareer12/BloxSafe/issues).
