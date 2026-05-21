#!/bin/bash
ENDPOINT=${1:-"http://127.0.0.1:4566"}
echo "📡 Probing LocalStack at $ENDPOINT..."

MAX_RETRIES=15
RETRY_COUNT=0

until curl -s "$ENDPOINT/_localstack/health" | grep -q "\"dynamodb\": \"\(running\|available\)\""; do
  if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
    echo "🏮 ❌ ERROR: LocalStack failed to stabilize in 60 seconds."
    exit 1
  fi
  echo "...still starting (Retry $RETRY_COUNT/$MAX_RETRIES)"
  sleep 2
  RETRY_COUNT=$((RETRY_COUNT + 1))
done

echo "🚀 LocalStack is READY!"
