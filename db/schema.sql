BEGIN;

    DROP TABLE IF EXISTS projects
    CASCADE;


CREATE TABLE projects
(
    id SERIAL PRIMARY KEY,
    week VARCHAR(255) NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    project_screenshot VARCHAR(255) ,
    project_link VARCHAR(255) ,
    collaborators TEXT
);

COMMIT;