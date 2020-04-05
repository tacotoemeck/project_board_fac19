BEGIN;

    DROP TABLE IF EXISTS projects, users
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    github_link VARCHAR(255) NOT NULL,
    github_img VARCHAR(255) NOT NULL
);

CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_screenshot VARCHAR(255) ,
    project_link VARCHAR(255) ,
    collaborators INTEGER REFERENCES users(id)
);

COMMIT;