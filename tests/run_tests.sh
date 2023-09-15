#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

genomehubs test \
    --config-file ${SCRIPT_DIR}/config/goat.yaml \
    --base-url https://goat.genomehubs.org/api/v2 \
    --json-test-dir ${SCRIPT_DIR}/api/landing
  