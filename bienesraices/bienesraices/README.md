# Strapi application

A quick description of your strapi application

## Instalar MySQL
1. Instalar y crear base de datos `bienesraices`
2. Configurar el Usuario root. En workbench, ejecutar:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```
```
flush privileges;
```

## Crear Nuevo Projecto
```
npx create-strapi-app bienesraices
```