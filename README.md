# SecurityHub-Hexagonal

Modular TypeScript backend for a **sensors & security domain**: users, sensors and user–sensor assignments, with JWT auth, Sequelize over MySQL, file uploads and hexagonal boundaries between modules.

> Study project — the sequel to [api-Hexagonal](https://github.com/Eliseo10208/api-Hexagonal), applying the same ports & adapters discipline to a more realistic domain. Part of my lab: [rodrigo-e-g.lat](https://rodrigo-e-g.lat/es)

## Domain

A security-monitoring backend: users register sensors (alarms, cameras, motion), sensors get assigned to users, and evidence files can be attached. Three modules, each isolated behind its own interfaces:

```
src/
├── user/                       # Auth + user management (JWT, bcrypt)
├── sensor/                     # Sensor CRUD + file uploads
│   ├── domain/
│   │   ├── Entities/Sensor.ts
│   │   └── Interface/SensorRepository.ts
│   ├── application/            # One use case per operation
│   │   └── MethodsSensor/{Create,Get,GetAll,Update,Delete}SensorUseCase.ts
│   └── infrastructure/
│       ├── Controllers/        # incl. UploadFileController (multer)
│       └── Repository/models/  # sequelize-typescript models
├── UserSensors/                # Assignment module (join domain)
└── database/                   # MySQL connection
```

Key points:

- **One use case per file** — each operation (`CreateSensorUseCase`, `DeleteSensorUseCase`, …) is independently testable and depends only on `SensorRepository`.
- **JWT auth** (`jsonwebtoken`) and password hashing (`bcrypt`) live in the user module's infrastructure, not in the domain.
- **Sequelize (`sequelize-typescript`)** is confined to `infrastructure/Repository` — the domain never sees the ORM.
- **Uploads** handled with `multer` behind a dedicated controller.

## Stack

TypeScript · Express · Sequelize + sequelize-typescript · MySQL · JWT · bcrypt · multer

## Run it

```bash
npm install
# .env: MySQL connection + JWT secret
npm run dev        # nodemon + ts-node
```

## Status

Built mid-2024 as an architecture lab. Next steps if revisited: use-case level tests and request validation at the controller boundary (zod or similar).
