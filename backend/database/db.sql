CREATE DATABASE formulario;

CREATE TABLE tareas(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);