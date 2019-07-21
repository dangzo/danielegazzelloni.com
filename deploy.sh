#!/bin/bash

UPDATE_AT=+%s
FULL_DATE=`date -u +%FT%T.000Z`
rm .DS_Store 2> /dev/null

date -u $UPDATE_AT > update_at.date
git add .
git commit -m "Update: ${FULL_DATE}"
git push
