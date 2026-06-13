import {
  BadgeIndianRupee,
  Bell,
  Bus,
  CalendarDays,
  CarTaxiFront,
  ChevronRight,
  CircleHelp,
  Compass,
  CreditCard,
  Headphones,
  HeartPulse,
  Hotel,
  MapPin,
  Menu,
  MountainSnow,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Ticket,
  UserRound,
  WalletCards
} from "lucide-react";
import type { CSSProperties } from "react";

const productTabs = [
  { label: "Flights", icon: Plane, tone: "sunset" },
  { label: "Hotels", icon: Hotel, tone: "lagoon" },
  { label: "Holidays", icon: MountainSnow, tone: "leaf" },
  { label: "Buses", icon: Bus, tone: "sky" },
  { label: "Cabs", icon: CarTaxiFront, tone: "rose" }
];

const destinationCards = [
  {
    city: "Bali",
    mood: "Sea temples",
    price: "from ₹18,420",
    meta: "Jul long weekend",
    color: "coral"
  },
  {
    city: "Dubai",
    mood: "Neon stopover",
    price: "from ₹11,880",
    meta: "Direct fares",
    color: "blue"
  },
  {
    city: "Goa",
    mood: "Monsoon villas",
    price: "from ₹4,960",
    meta: "48 hr drop",
    color: "green"
  }
];

const supportTiles = [
  { label: "Travel shield", icon: ShieldCheck, value: "Insure" },
  { label: "Visa desk", icon: Ticket, value: "Assist" },
  { label: "HDFC offers", icon: CreditCard, value: "Save" },
  { label: "Concierge", icon: Headphones, value: "24/7" }
];

const timeline = [
  { step: "Fare locked", detail: "Delhi to Bangkok", time: "09:40" },
  { step: "Hotel watch", detail: "Riverside rooms", time: "11:15" },
  { step: "Cab window", detail: "Airport pickup", time: "18:30" }
];

const navItems = [
  { label: "Home", icon: Compass, active: true },
  { label: "Trips", icon: Ticket, active: false },
  { label: "Wallet", icon: WalletCards, active: false },
  { label: "Help", icon: CircleHelp, active: false }
];

export function App() {
  return (
    <main className="app">
      <section className="hero" aria-label="Travel search">
        <img className="hero__image" src="/assets/travel-hero.png" alt="" />
        <div className="hero__shade" />

        <header className="topbar">
          <button className="icon-button" aria-label="Open menu">
            <Menu size={22} />
          </button>
          <div className="brand">
            <span className="brand__mark">
              <Plane size={18} />
            </span>
            <span>ScanMyFlight</span>
          </div>
          <button className="icon-button" aria-label="Notifications">
            <Bell size={21} />
          </button>
        </header>

        <div className="hero__copy">
          <p className="eyebrow">
            <Sparkles size={15} />
            Summer fares are moving
          </p>
          <h1>Trips that feel alive before you book.</h1>
        </div>
      </section>

      <section className="product-rail" aria-label="Travel products">
        {productTabs.map((item) => {
          const Icon = item.icon;
          return (
            <button className={`product-chip product-chip--${item.tone}`} key={item.label}>
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </section>

      <section className="booking-console" aria-label="Trip search form">
        <div className="route-card">
          <div>
            <span className="field-label">From</span>
            <strong>New Delhi</strong>
            <small>DEL, India</small>
          </div>
          <div className="route-line">
            <Plane size={18} />
          </div>
          <div>
            <span className="field-label">To</span>
            <strong>Singapore</strong>
            <small>SIN, Singapore</small>
          </div>
        </div>

        <div className="search-grid">
          <div className="mini-field">
            <CalendarDays size={18} />
            <span>
              <small>Depart</small>
              <strong>24 Jun</strong>
            </span>
          </div>
          <div className="mini-field">
            <UserRound size={18} />
            <span>
              <small>Travellers</small>
              <strong>2 Adults</strong>
            </span>
          </div>
        </div>

        <button className="primary-action">
          <Search size={20} />
          <span>Search the sky</span>
        </button>
      </section>

      <section className="fold-grid" aria-label="Travel dashboard">
        <div className="section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow compact">Fare bloom</p>
              <h2>Hot routes</h2>
            </div>
            <button className="ghost-action" aria-label="View hot routes">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="destination-strip">
            {destinationCards.map((card) => (
              <article
                className={`destination-card destination-card--${card.color}`}
                key={card.city}
              >
                <div>
                  <MapPin size={17} />
                  <span>{card.meta}</span>
                </div>
                <h3>{card.city}</h3>
                <p>{card.mood}</p>
                <strong>{card.price}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow compact">Command center</p>
              <h2>Trip pulse</h2>
            </div>
            <span className="status-pill">Live</span>
          </div>

          <div className="pulse-card">
            <div className="pulse-meter" aria-hidden="true">
              {Array.from({ length: 18 }, (_, index) => (
                <span
                  key={index}
                  style={{ "--bar": `${24 + ((index * 17) % 52)}px` } as CSSProperties}
                />
              ))}
            </div>
            <div className="pulse-summary">
              <HeartPulse size={21} />
              <span>3 watchlists moving today</span>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.step}>
                <time>{item.time}</time>
                <div>
                  <strong>{item.step}</strong>
                  <span>{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block services" aria-label="Travel services">
        <div className="section-heading">
          <div>
            <p className="eyebrow compact">Beyond booking</p>
            <h2>Ready around the trip</h2>
          </div>
        </div>

        <div className="service-grid">
          {supportTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <article className="service-tile" key={tile.label}>
                <span>
                  <Icon size={21} />
                </span>
                <strong>{tile.value}</strong>
                <p>{tile.label}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="wallet-band" aria-label="Wallet and offers">
        <div>
          <span>
            <BadgeIndianRupee size={19} />
          </span>
          <div>
            <strong>HDFC SmartGateway</strong>
            <p>UPI, cards, EMI and wallet credits staged for checkout.</p>
          </div>
        </div>
        <button className="wallet-button">Offers</button>
      </section>

      <nav className="bottom-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button className={item.active ? "is-active" : ""} key={item.label}>
              <Icon size={21} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="safe-space" />
    </main>
  );
}
