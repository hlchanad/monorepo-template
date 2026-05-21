#!/bin/bash
echo "🏗️ Provisioning LocalStack infrastructure skeleton for stage: e2e..."

awslocal s3 mb s3://monorepo-template-e2e-deployments --region ap-northeast-1 2>/dev/null || true

echo "✅ LocalStack E2E infrastructure is ready."
