#!/bin/bash

UPDATE_AT=+%s
FULL_DATE=`date -u +%FT%T.000Z`
rm .DS_Store 2> /dev/null

date -u $UPDATE_AT > update_at.date
echo "Update: ${FULL_DATE}"
git add .
git commit -m "Update: $UPDATE_AT"
git push
