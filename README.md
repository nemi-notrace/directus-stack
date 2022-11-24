# just another stack

```
yarn 
docker-compose up -d
cd packages/directus && cp sample.env .env && yarn directus bootstrap cd ../..
yarn dev
```
Be carfull if you work with  existing database ... better migrate !!!
https://docs.directus.io/reference/cli.html


## TO DO

- clean up tailwind
- check conf
- add auth
- check gitignore ... keep some stuff alive...