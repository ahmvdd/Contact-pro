-- Create tables for contact management app
CREATE TABLE IF NOT EXISTS "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "notes" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create indexes
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
CREATE INDEX IF NOT EXISTS "Contact_userId_idx" ON "Contact"("userId");

-- Insert sample data
INSERT OR IGNORE INTO "User" ("id", "email", "password", "name") VALUES 
(1, 'demo@example.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/RK.s5uO.G', 'Utilisateur Demo');

INSERT OR IGNORE INTO "Contact" ("firstName", "lastName", "phone", "email", "address", "notes", "userId") VALUES 
('Jean', 'Dupont', '01 23 45 67 89', 'jean.dupont@email.com', '123 Rue de la Paix, Paris', 'Collègue de travail', 1),
('Marie', 'Martin', '06 12 34 56 78', 'marie.martin@email.com', '456 Avenue des Champs, Lyon', 'Amie d''enfance', 1),
('Pierre', 'Durand', '04 56 78 90 12', 'pierre.durand@email.com', '789 Boulevard Saint-Germain, Marseille', 'Client important', 1);
