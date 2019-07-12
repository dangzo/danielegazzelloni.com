#!/bin/bash

UPDATE_AT=+"%FT%T.000Z"

rm .DS_Store

date -u $UPDATE_AT > update_at.date

git add .
git commit -m "Update: $UPDATE_AT"
git push
