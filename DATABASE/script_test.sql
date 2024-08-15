CREATE TABLE PRODUCTOS (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
	precio NUMERIC(8,1) NOT NULL,
    cantidad INTEGER NOT NULL
);

SELECT * FROM PRODUCTOS

INSERT INTO PRODUCTOS (nombre, precio, cantidad)
VALUES ('Manzanas', 1.9, 100);

INSERT INTO PRODUCTOS (nombre, precio, cantidad)
VALUES ('Peras', 1.5, 200);



