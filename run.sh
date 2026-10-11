#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/docs"
bundle check || bundle install
exec bundle exec jekyll serve
