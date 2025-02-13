# Cov'Aire

Une application web permettant de trouver toutes les aires de covoiturage en France.

> covaire.vercel.app

![image](https://github.com/user-attachments/assets/f1eae81e-0dcf-4ca8-b284-c2e10df738b8)


## Front-End

Technologies:

- React(Next.js)
- Typescript
- Tailwind CSS

## Back-End

Technologies:

- Java 17
- API Spring Boot
- Postgresql

## Déploiement

Technologies:

- AWS EC2
- Docker
- Vercel

## Démarrage

### Prérequis:

- jdk:corretto-17
- Node.js v22+

### Côté front

Placez un fichier .env dans le répertoire front-end:
```
NEXT_PUBLIC_API_URL=http://localhost:8081/api/v1/carpooling-areas
```

Placez vous dans le répertoire frontend et tapez les commandes suivantes:
```
npm install
npm run dev
```

### Côté back

Placez un fichier .env dans le répertoire api-rest:
```
SPRING_DATASOURCE_URL=jdbc:exemple://localhost/exempledb
SPRING_DATASOURCE_DRIVER=org.exemple.Driver
SPRING_DATASOURCE_USERNAME=user
SPRING_DATASOURCE_PASSWORD=password
SPRING_DATASOURCE_DB=exempledb
```

Ouvrir le répertoire api-rest avec un IDE(Eclipse, Intellij...) et lancer l'application ou en ligne de commande,

Placez vous dans le répertoire api-rest et tapez les commandes suivantes:
```
# Maven
mvn spring-boot:run

# Gradle
./gradlew bootRun
```
