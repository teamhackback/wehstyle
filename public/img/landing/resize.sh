#!/bin/bash

for file in $(find -name "*.png") ; do
    if [[ $file =~ .*"_small.png" ]] ; then
        continue
    fi
    if [[ $file =~ .*"_cropped.png" ]] ; then
        continue
    fi
    filename=${file%.*}
    filenameSmall=${filename}_small.jpg
    echo "$file -> $filenameSmall"
    convert -resize 200x1000 $file $filenameSmall
done

for file in $(find -name "*.jpg") ; do
    if [[ $file =~ .*"_small.jpg" ]] ; then
        continue
    fi
    if [[ $file =~ .*"_cropped.jpg" ]] ; then
        continue
    fi
    filename=${file%.*}
    filenameSmall=${filename}_small.jpg
    echo "$file -> $filenameSmall"
    convert -resize 200x1000 $file $filenameSmall
done
