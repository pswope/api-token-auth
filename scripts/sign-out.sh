#!/bin/bash
#curl "http://httpbin.org/delete?id=$ID" \
 curl "http://localhost:3000/sign-out/$ID" \
  --include \
  --header "Authorization: Token token=$TOKEN" \
  --request DELETE

# data output from curl doesn't have a trailing newline
echo
