CREATE TABLE ceos (
    id serial PRIMARY KEY,
    name text NOT NULL,
    year integer
);

INSERT INTO ceos (name, year)
    VALUES ('Steve Jobs', 1976), ('Mike Markkula', 1977), ('Mike Scott', 1978), ('John Sculley', 1983), ('Michael Spindler', 1993), ('Gil Amelio', 1996), ('Steve Jobs', 1997), ('Tim Cook', 2011);

