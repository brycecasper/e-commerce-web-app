select * from ecom_user
join ecom_order
on ecom_user.user_id = ecom_order.user_id
where ecom_user.email = $1
and ecom_order.paid = false;