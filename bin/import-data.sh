#!/bin/bash
APPID=$2
MASTERSECRET=$3

TOKEN=openssl base64 -e <<< $(APPID):$(MASTERSECRET)

for file in ../import-data/**.json
do
  for row in $(echo "$(cat $file)" | jq -r '.[] | @base64'); do
    _jq() {
      echo ${row} | base64 --decode | jq -r ${1}
     }
    curl -X POST -d @./import-data/$file -H "Authentication: Basic $(token)" -H "Content-Type: application/json" https://stg-us1-baas.kinvey.com/appdata/$(APPID)/$(COLLECTION_NAME)
  done
done
