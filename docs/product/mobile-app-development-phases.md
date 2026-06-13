# Mobile App Development Phases

This plan covers the Android and iPhone apps for ScanMyFlight. The current `apps/mobile-prototype` project is a design prototype only; the production apps will be native Android and native iPhone apps.

## Phase 0: Product And Design Foundation

Goal: lock the app shape before native implementation starts.

Deliverables:

- Mobile information architecture for Home, Search, Results, Details, Checkout, Trips, Wallet, Offers, Profile, and Help.
- User journey maps for flights, hotels, holidays, buses, cabs, insurance, visa assistance, and support.
- Shared design system: colors, typography, spacing, icons, buttons, forms, cards, bottom navigation, empty states, loading states, and error states.
- Foldable layout rules for Samsung Fold devices.
- iPhone layout rules for compact, regular, notch, Dynamic Island, and large text settings.
- Clickable design prototype using the existing Vite/React skeleton.
- Analytics event naming plan for both apps.

Exit criteria:

- Core app navigation and first MVP screens are approved.
- Design tokens are ready to translate into Android Compose and SwiftUI.
- No product area depends on train booking or IRCTC flows.

## Phase 1: Native App Skeletons

Goal: create production-ready native app foundations.

Android deliverables:

- Kotlin app under `apps/android`.
- Jetpack Compose navigation shell.
- App theme, typography, icons, splash screen, and adaptive launcher icon.
- Debug, staging, and production build variants.
- Hilt dependency injection setup.
- Retrofit/OkHttp API client shell.
- Room database shell for local cache.
- Firebase Cloud Messaging setup placeholder.

iPhone deliverables:

- SwiftUI app under `apps/ios`.
- Navigation shell with tab structure.
- App theme, typography, symbols, launch screen, and app icon set.
- Debug, staging, and production schemes.
- API client shell using URLSession or Alamofire.
- SwiftData/Core Data shell for local cache.
- APNs setup placeholder.

Shared deliverables:

- OpenAPI-generated mobile API models.
- Environment configuration for local, staging, and production.
- Deep link and universal/app link URL plan.
- Shared screen inventory and naming conventions.

Exit criteria:

- Both apps build locally.
- Android app can launch on the connected Fold 6.
- iPhone app can launch in simulator.
- Empty navigation shells match the approved design direction.

## Phase 2: Account, Profile, And Personalization

Goal: build the user layer before booking workflows.

Deliverables:

- Login/signup screens for phone OTP, email, Google, Apple, and guest browsing placeholders.
- Profile home.
- Saved travelers.
- Saved GST details.
- Saved addresses.
- Notification preferences.
- App permissions UX for notifications and location.
- Local secure token storage through Android Keystore and iOS Keychain.
- Personalization placeholders for recent searches, popular routes, and saved destinations.

Exit criteria:

- Users can move through account/profile screens with mock or staging API data.
- Form validation patterns are consistent across Android and iPhone.
- Secure storage approach is verified on both platforms.

## Phase 3: Search And Discovery MVP

Goal: make search and discovery feel fast before real booking is enabled.

Deliverables:

- Home screen with product modules for flights, hotels, holidays, buses, cabs, insurance, visa assistance, offers, and support.
- Flight search form: one-way, round-trip, multicity placeholder, passengers, cabin, date picker, and route picker.
- Hotel search form: destination, dates, rooms, guests, locality, and map/list entry points.
- Static holiday, bus, cab, insurance, and visa discovery surfaces.
- Destination autocomplete UI.
- Recent searches and saved searches.
- Loading skeletons, empty states, and retry states.

Exit criteria:

- Flight and hotel search screens are complete with mock data.
- Result entry points are ready for backend/TBO integration.
- The Fold 6 layout is comfortable in folded and unfolded widths.

## Phase 4: Results And Details

Goal: build comparison screens where users choose what to book.

Deliverables:

- Flight results list with filters, sorting, fare cards, airline summary, duration, stops, baggage, and refundability.
- Flight details with fare rules, baggage, cancellation, reschedule, and price breakdown sections.
- Hotel results list with filters, sorting, map entry, offers, ratings, amenities, and cancellation policy highlights.
- Hotel details with image gallery, rooms, amenities, location, policies, reviews placeholder, similar stays, and price breakdown.
- Holiday package detail shell.
- Bus and cab listing/detail shells.
- Favorite/save controls.

Exit criteria:

- Users can navigate from search to result to detail screens.
- Result cards can represent real TBO data without redesign.
- Price, tax, policy, and provider labels have reserved layout space.

## Phase 5: Checkout And HDFC Payment UX

Goal: complete the front-end checkout experience without exposing payment credentials.

Deliverables:

- Passenger/guest/contact detail forms.
- GST invoice fields.
- Coupon and offer entry.
- Wallet/credit placeholder.
- HDFC SmartGateway payment method selection screen.
- Payment session handoff screen.
- Payment processing, success, failed, retry, and pending states.
- Booking hold expiry UI.
- Duplicate payment prevention messaging.
- Refund initiation and refund tracking UI.

Exit criteria:

- Mobile apps only consume backend-created payment session payloads.
- Payment result is never treated as final until backend verification.
- All payment edge states have screens: success, failed, cancelled, pending, timeout, and refund started.

## Phase 6: TBO Booking Integration UX

Goal: connect the apps to backend booking flows while keeping provider complexity hidden.

Deliverables:

- Flight fare revalidation state.
- Hotel availability/pricing verification state.
- Booking progress timeline.
- Ticket/voucher detail screens.
- Booking failed after payment success state.
- Supplier pending state.
- Cancellation policy confirmation screens.
- Cancellation and amendment request screens.
- Provider reference, booking ID, invoice, voucher, and support entry points.

Exit criteria:

- Apps can display every backend booking state clearly.
- Users always know whether payment, provider booking, ticketing, voucher, refund, or support is pending.
- No TBO credentials or raw provider XML are exposed to the apps.

## Phase 7: Trips, Support, Notifications, And Wallet

Goal: build post-booking confidence.

Deliverables:

- Trips dashboard: upcoming, completed, cancelled, failed, and pending.
- Trip detail timeline.
- Download/share ticket or voucher.
- Support center and booking-specific support.
- Chat/call request/ticket placeholder.
- Push notification inbox.
- Refund status tracking.
- Wallet ledger and credits view.
- Offer wallet and HDFC offer highlights.

Exit criteria:

- A user can manage a booked trip without returning to search.
- Support can be launched from every booking state.
- Notification deep links route to the correct screen.

## Phase 8: Quality, Accessibility, And Beta

Goal: make the apps store-ready.

Deliverables:

- Android UI tests for critical screens.
- iPhone UI tests for critical screens.
- Snapshot/golden tests for major screens.
- Accessibility pass: labels, contrast, dynamic type, focus order, and screen-reader behavior.
- Offline and poor-network behavior.
- Crash reporting and analytics verification.
- Performance pass for cold start, list scrolling, image loading, and checkout transitions.
- Internal beta through Firebase App Distribution or Play internal testing for Android.
- TestFlight beta for iPhone.

Exit criteria:

- No blocker crashes in beta.
- Core flows meet performance targets.
- Accessibility issues are triaged and fixed for MVP scope.

## Phase 9: Store Launch

Goal: release safely to customers.

Deliverables:

- Play Store listing: app name, icon, screenshots, short description, long description, privacy policy, data safety, and release notes.
- App Store listing: app name, icon, screenshots, subtitle, description, privacy nutrition labels, support URL, and release notes.
- Production API environment configured.
- Production HDFC payment return links configured.
- Production deep links verified.
- Rollout plan with staged release.
- Launch monitoring dashboard.

Exit criteria:

- Android app is approved and staged for release.
- iPhone app is approved and staged for release.
- Support, payments, refunds, and booking monitoring are staffed for launch.

## Recommended Build Order

1. Finish and approve the frontend prototype.
2. Scaffold Android and iPhone native apps.
3. Build shared design system components in both native apps.
4. Build account/profile shell.
5. Build flight and hotel search.
6. Build results and details.
7. Build checkout and HDFC payment UX.
8. Connect backend booking states.
9. Build trips/support/wallet.
10. Run beta, fix quality issues, and submit to stores.

## MVP App Scope

The first app MVP should include:

- Home.
- Flights.
- Hotels.
- Search.
- Results.
- Details.
- Checkout shell.
- HDFC payment handoff UX.
- Trips.
- Support entry points.
- Profile.
- Offers.

After MVP:

- Holidays.
- Buses.
- Cabs.
- Insurance.
- Visa assistance.
- Forex lead flow.
- Corporate travel.
- Loyalty and referrals.
