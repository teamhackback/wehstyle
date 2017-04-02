#!/bin/bash

for file in $(find -name "*.png") ; do
    if [[ $file =~ .*"_small.png" ]] ; then
        continue
    fi
    filename=${file%.*}
    filenameSmall=${filename}_small.png
    echo "$file -> $filenameSmall"
    convert -resize 1000x1000 $file $filenameSmall
done
