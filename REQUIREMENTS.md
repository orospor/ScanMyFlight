# ScanMyFlight Requirements

This file is the working requirements checklist for building ScanMyFlight as a travel super-app with native Android and iPhone apps, a backend API, admin web console, TBO supplier integrations, and HDFC SmartGateway payments.

## Installed In This Repository

The root workspace uses npm workspaces for shared tooling across future apps, services, and packages.

- TypeScript for shared backend/admin/package code.
- ESLint for JavaScript/TypeScript linting.
- Prettier for formatting.
- Vitest for unit tests.
- Turbo for future monorepo task orchestration.
- OpenAPI TypeScript generator for API client/server contracts.
- dotenv-cli for local environment script support.
- concurrently for local multi-process development scripts.

Install command:

```sh
npm install
```

If the user-level npm cache has permissions problems, use a repo-local cache:

```sh
npm install --cache .npm-cache
```

Common commands:

```sh
npm run format
npm run format:check
npm run lint
npm run typecheck
npm test
```

## System Tool Requirements

### Required Now

- Git.
- GitHub CLI.
- Node.js 24 or newer.
- npm 11 or newer.
- Docker Desktop.
- Xcode 26 or newer for iPhone development.
- Swift 6 or newer.

### Required Before Android Work

- Android Studio.
- Android SDK Platform 35 or newer.
- Android SDK Build Tools 35 or newer.
- Android Emulator.
- Kotlin plugin.
- Java JDK 21 or newer.
- Gradle, usually through the project Gradle wrapper.

Recommended shell setup for this machine:

```sh
export JAVA_HOME=/opt/homebrew/opt/openjdk@21
export PATH="$JAVA_HOME/bin:$PATH"
```

### Required Before Infrastructure Work

- Terraform.
- Cloud CLI for the selected provider: AWS CLI, Google Cloud CLI, or Azure CLI.
- kubectl if Kubernetes is selected.
- Helm if Kubernetes package management is needed.

## Mobile App Requirements

### Android App

- Kotlin.
- Jetpack Compose.
- AndroidX.
- Kotlin Coroutines and Flow.
- Hilt for dependency injection.
- Room for local persistence.
- Retrofit and OkHttp for API calls.
- Coil for image loading.
- Firebase Cloud Messaging for push notifications.
- Google Maps SDK.
- Play Integrity API.
- App Links for deep linking.
- Secure storage for tokens and sensitive local data.

### iPhone App

- Swift.
- SwiftUI.
- Swift Concurrency with async/await.
- SwiftData or Core Data.
- URLSession or Alamofire.
- Nuke or Kingfisher for image loading.
- APNs for push notifications.
- Apple Maps or Google Maps SDK.
- Sign in with Apple.
- Universal Links for deep linking.
- Keychain for tokens and sensitive local data.

## Backend Requirements

- Node.js with TypeScript.
- NestJS or Fastify.
- PostgreSQL.
- Redis.
- BullMQ or Temporal for booking workflows.
- OpenSearch or Elasticsearch.
- S3-compatible object storage.
- OpenAPI for mobile/admin contracts.
- WebSocket or SSE for booking/support status updates.
- OpenTelemetry instrumentation.
- Sentry for error tracking.

## Integration Requirements

### TBO

- TBO sandbox credentials.
- Full hotel API access.
- Full flight API documentation and credentials after partner onboarding.
- Request/response logging for certification.
- Hotel search, availability/pricing, booking, booking detail, invoice, cancellation, and amendment support.
- Flight search, fare quote/revalidation, SSR, booking, ticketing, cancellation, reschedule, and refund support.

### HDFC SmartGateway

- HDFC merchant onboarding.
- Merchant ID and configured settlement account.
- Sandbox credentials.
- Production credentials.
- Selected integration mode: SDK/API, JWT encryption, basic authentication, integration kit, or Tranportal.
- Backend session/order creation.
- Return URL/deep link configuration for Android and iPhone.
- Webhook endpoint and signing/verification setup.
- Order Status API verification before booking confirmation.
- Refund API access.
- Settlement and reconciliation report access.
- Offer engine, EMI, no-cost EMI, BNPL, and dynamic currency conversion configuration if enabled.

## Security And Compliance Requirements

- Backend-only storage of TBO and HDFC credentials.
- Secrets stored in a managed secret manager.
- PCI scope kept low by using HDFC-hosted/tokenized payment flows.
- No raw card storage.
- Signed webhook verification.
- Idempotency keys for payment, booking, cancellation, and refund operations.
- Audit logs for admin/support actions.
- PII encryption at rest where needed.
- GST invoice compliance.
- App Store and Play Store compliance.
- Data privacy policy and consent management.

## Initial Environment Status

Checked on the development machine:

- Node.js: installed, v25.9.0.
- npm: installed, v11.12.1.
- GitHub CLI: installed and authenticated.
- Xcode: installed, v26.5.
- Swift: installed, v6.3.2.
- Docker: installed, v29.5.3.
- Java/JDK: Homebrew OpenJDK 21.0.11 is installed at `/opt/homebrew/opt/openjdk@21`; set `JAVA_HOME` before running Android tools.
- Android command-line tools: installed, `sdkmanager` v20.0 works when `JAVA_HOME` is set.
- Android SDK packages: `build-tools;35.0.0` and `platforms;android-35` are installed.
- Terraform: installed from `hashicorp/tap`, v1.15.6.
- pnpm: not installed; this repo currently uses npm.
- Android SDK package update attempt for `platform-tools`, `emulator`, `platforms;android-36`, and `build-tools;36.0.0` could not fetch Google's package manifest. Retry from Android Studio SDK Manager or rerun `JAVA_HOME=/opt/homebrew/opt/openjdk@21 sdkmanager "platform-tools" "emulator"` when the SDK repository is reachable.
- Android Studio GUI app: still required before comfortable Android app development.
