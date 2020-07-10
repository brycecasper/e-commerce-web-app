create table ecom_user (
    user_id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    email varchar(100) not null,
    password varchar(300) not null
);

create table ecom_order (
    order_id serial primary key,
    user_id int references ecom_user(user_id),
    product_id int references ecom_products(product_id),
    movie_id int references ecom_movies(movie_id),
    music_id int references ecom_music(music_id),
    total_price decimal,
    paid boolean
);

create table ecom_products (
    product_id serial primary key,
    product_name varchar(100),
    product_desc varchar(1000),
    product_img varchar(500),
    category varchar(100),
    price decimal
);

create table ecom_movies (
    movie_id serial primary key,
    title varchar(100),
    movie_desc varchar(500),
    genre varchar(100),
    rating varchar(100),
    cover_img varchar(500),
    price decimal
);

create table ecom_music (
    music_id serial primary key,
    track varchar(100),
    artist varchar(100),
    album varchar(100),
    album_img varchar(500),
    genre varchar(100),
    top_charts int,
    price decimal
);