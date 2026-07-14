#!/usr/bin/env sh
set -eu

POSTGRES_HOST="${POSTGRES_HOST:-localhost}"
POSTGRES_PORT="${POSTGRES_PORT:-5432}"
REDIS_HOST="${REDIS_HOST:-localhost}"
REDIS_PORT="${REDIS_PORT:-6379}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-30}"

wait_for_tcp() {
  name="$1"
  host="$2"
  port="$3"
  attempt=1

  while [ "$attempt" -le "$MAX_ATTEMPTS" ]; do
    if nc -z "$host" "$port" >/dev/null 2>&1; then
      printf '%s is ready at %s:%s\n' "$name" "$host" "$port"
      return 0
    fi

    printf 'Waiting for %s at %s:%s (%s/%s)\n' "$name" "$host" "$port" "$attempt" "$MAX_ATTEMPTS"
    attempt=$((attempt + 1))
    sleep 2
  done

  printf '%s did not become ready at %s:%s\n' "$name" "$host" "$port" >&2
  return 1
}

wait_for_tcp "PostgreSQL" "$POSTGRES_HOST" "$POSTGRES_PORT"
wait_for_tcp "Redis" "$REDIS_HOST" "$REDIS_PORT"
