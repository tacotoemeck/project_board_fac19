BEGIN;

    DROP TABLE IF EXISTS projects, users
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

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(225) NOT NULL,
    user_password TEXT
);

INSERT INTO users
    (username, user_password)
VALUES
    ('admin', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy');


COMMIT;