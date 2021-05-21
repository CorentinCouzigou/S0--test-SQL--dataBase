DROP TABLE IF EXISTS "logging";
DROP TABLE IF EXISTS "password";

CREATE TABLE IF NOT EXISTS "logging"(
    "id" SERIAL PRIMARY KEY,
    "nom" TEXT,
    "prenom" TEXT,
);
INSERT INTO "loggin" ("nom","prenom") VALUES ('bond','james');


CREATE TABLE IF NOT EXISTS "password"(
    "id" SERIAL PRIMARY KEY,
    "motdepasse" TEXT,
    "logging_id" INT ,
    FOREIGN KEY ("logging_id") REFERENCES "logging"("id");
    );
INSERT INTO "password"("motdepasse") VALUES ('casinoroyale');
