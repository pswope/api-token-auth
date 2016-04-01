#!/bin/bash
#curl "http://httpbin.org/post" \
#curl "http://localhost:3000/sign-up" \
curl "http://localhost:3000/sign-up" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD" \
  --data-urlencode "cerdentials[password_confirmation]=$PASSWORD" 

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo
