# VPS Installation/Setup

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

Once you are in the `.env` file, configure the settings. Add mysql credentials add an encryption key etc.

```shell
## Basic
node /root/nodejs/BloxSafe
## With forever
forever start /root/nodejs/BloxSafe/index.js
```
