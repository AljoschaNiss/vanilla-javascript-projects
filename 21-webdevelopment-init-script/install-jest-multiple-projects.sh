#!/bin/bash
for dir in /path/to/projects/*; do
  if [ -d "$dir" ]; then
    cd "$dir"
    npm init -y
    npm install --save-dev jest
    echo "Installed Jest in $dir"
  fi
done