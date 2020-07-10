insert into ecom_order (
    user_id,
    paid
) values (
    $1,
    false
) returning *;