#!/bin/bash

PATH=$PATH:$(dirname $(realpath $0))/node_modules/.bin

output=$1
if [[ "$output" == "" ]]; then
 output="$(dirname $0)/../web"
else
 output=$(realpath $output)
fi

build() {
 local dist="$1"
 [ -d $dist ] || mkdir -p $dist
 echo "browserify" $(pwd)/src/main.js
 browserify -d -e src/main.js -t babelify -o "$dist/js/main.js" -v
}

build $output
