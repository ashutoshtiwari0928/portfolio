import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bell,
  Cloud,
  Cpu,
  Database,
  Globe,
  RefreshCw,
  Route,
  Server,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Zap,
} from "lucide-react";

const services = [
  {
    name: "Clinic Booking Service",
    stack: "Spring Boot · Java 21",
    Icon: Stethoscope,
    db: "MySQL",
    dbNote: "HikariCP Pool",
    accent: "text-sky-400",
    bg: "bg-sky-500/20",
  },
  {
    name: "User / Auth Service",
    stack: "Spring Security · JWT",
    Icon: UserRound,
    db: "PostgreSQL",
    dbNote: "Identity Store",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/20",
  },
  {
    name: "Notification Worker",
    stack: "Spring Kafka Consumer",
    Icon: Bell,
    db: "MongoDB",
    dbNote: "Event Logs",
    accent: "text-pink-400",
    bg: "bg-pink-500/20",
  },
];

function FlowArrow({ label, sub }) {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <span className="text-[11px] md:text-xs font-mono text-gray-400 tracking-wide">
        {label}
      </span>
      {sub && (
        <span className="text-[10px] md:text-[11px] font-mono text-gray-500">
          {sub}
        </span>
      )}
      <ArrowDown
        className="my-1 animate-pulse"
        size={20}
        strokeWidth={1.5}
        stroke="currentColor"
        color="#818cf8"
      />
    </div>
  );
}

function Chip({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${className}`}
    >
      {children}
    </span>
  );
}

function ServiceCard({ service }) {
  const { Icon } = service;
  return (
    <div className="group relative rounded-2xl border border-gray-700 bg-gray-900 p-5 flex flex-col gap-4 transition hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="flex items-center gap-3">
        <span
          className={`rounded-xl ${service.bg} ${service.accent} p-2.5 shrink-0`}
        >
          <Icon size={22} />
        </span>
        <div>
          <h3 className="font-semibold text-sm md:text-base leading-tight">
            {service.name}
          </h3>
          <p className="text-[11px] text-gray-400 font-mono">{service.stack}</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["replica 01", "replica 02"].map((r) => (
          <span
            key={r}
            className="rounded-lg border border-gray-700 bg-gray-800 px-2 py-1 text-[10px] font-mono text-gray-300"
          >
            {r}
          </span>
        ))}
        <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2 py-1 text-[10px] font-mono text-emerald-400">
          <Activity size={11} /> registered · Eureka
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Chip className="bg-amber-500/10 text-amber-300 border border-amber-500/30">
          <RefreshCw size={11} /> Resilience4j · Circuit Breaker
        </Chip>
        <Chip className="bg-red-500/10 text-red-300 border border-red-500/30">
          <Zap size={11} /> Redis Cache (95% hit)
        </Chip>
      </div>

      <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-2.5 flex items-center gap-2">
        <Database size={15} className="text-sky-400 shrink-0" />
        <div className="text-[11px] leading-tight">
          <span className="font-semibold text-gray-200">{service.db}</span>
          <span className="text-gray-400"> · {service.dbNote}</span>
        </div>
      </div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section id="architecture" className="py-20">
      <div className="w-auto mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3">
          Architecture I'm Currently Building
        </h2>
        <p className="text-center text-gray-300 text-sm md:text-base mb-12 max-w-3xl mx-auto">
          A production-grade Java microservices platform — resilient,
          event-driven, and auto-scaled. Every layer below is part of the
          system I design and ship day-to-day.
        </p>

        <div
          className="max-w-6xl mx-auto rounded-3xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-950 px-4 md:px-10 py-8 md:py-12 shadow-2xl"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        >
          {/* Row 1 — Clients */}
          <div className="mx-auto w-fit rounded-2xl border border-indigo-500/40 bg-indigo-500/10 px-8 py-4 flex items-center gap-3">
            <Globe size={22} className="text-indigo-300" />
            <div className="text-left">
              <p className="font-semibold text-sm md:text-base">
                External Clients
              </p>
              <p className="text-[11px] font-mono text-gray-400">
                React.js Web · Mobile · REST / WS
              </p>
            </div>
          </div>

          <FlowArrow label="HTTPS + JWT" />

          {/* Row 2 — Gateway + Eureka */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
            <div className="rounded-2xl border border-gray-700 bg-gray-900 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-indigo-500/20 text-indigo-300 p-2.5">
                  <Cloud size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Spring Cloud API Gateway
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400">
                    :8080 · single entry point
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  <Route size={11} /> Dynamic Routing
                </Chip>
                <Chip className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  Rate Limiting
                </Chip>
                <Chip className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  JWT Auth
                </Chip>
                <Chip className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                  Request Caching
                </Chip>
              </div>
              <p className="text-[11px] text-gray-400">
                Routes each request to the healthy instance via the next hop.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center gap-1 px-2">
              <ArrowRight size={20} className="text-indigo-400" />
              <span className="text-[10px] font-mono text-gray-500 whitespace-nowrap">
                register /
                <br />
                discover
              </span>
            </div>

            <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-purple-500/20 text-purple-300 p-2.5">
                  <Server size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Eureka Service Registry
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400">
                    Spring Cloud Netflix
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-300 font-mono">Clinic-Booking</span>
                  <span className="text-emerald-400 font-mono">UP ×2</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-300 font-mono">User-Auth</span>
                  <span className="text-emerald-400 font-mono">UP ×2</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-gray-300 font-mono">
                    Notification-Worker
                  </span>
                  <span className="text-emerald-400 font-mono">UP ×2</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-400">
                Heartbeats → self-healing service discovery.
              </p>
            </div>
          </div>

          <FlowArrow label="Spring Cloud LoadBalancer" sub="selects healthy instance" />

          {/* Row 3 — Services with autoscaling */}
          <div className="relative rounded-2xl border-2 border-dashed border-indigo-500/50 p-6 md:p-8 mt-2">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-indigo-500 px-4 py-0.5 text-[11px] font-semibold">
              Kubernetes HPA · Autoscaling 2 → 6 replicas
            </span>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.name} service={s} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-center">
              <Cpu size={14} className="text-indigo-400 shrink-0" />
              <p className="text-[11px] text-gray-400">
                Resilience4j retries + fallbacks between services keep the
                request graph alive when a dependency degrades.
              </p>
            </div>
          </div>

          {/* Row 4 — Redis + Kafka */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-red-500/20 text-red-300 p-2.5">
                  <Zap size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Redis · Cache Management
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400">
                    @Cacheable / Spring Cache Abstraction
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-lg bg-gray-800/70 border border-gray-700 px-2 py-1.5">
                  <span className="text-gray-400">booked slots</span>
                  <p className="font-mono text-emerald-400">TTL 10m ✓</p>
                </div>
                <div className="rounded-lg bg-gray-800/70 border border-gray-700 px-2 py-1.5">
                  <span className="text-gray-400">hot profiles</span>
                  <p className="font-mono text-emerald-400">TTL 30m ✓</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400">
                Cuts DB load & backpressure under traffic spikes.
              </p>
            </div>

            <div className="rounded-2xl border border-pink-500/40 bg-pink-500/10 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-pink-500/20 text-pink-300 p-2.5">
                  <Activity size={22} />
                </span>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    Apache Kafka · Event Bus
                  </h3>
                  <p className="text-[11px] font-mono text-gray-400">
                    3 brokers · async communication
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip className="bg-pink-500/10 text-pink-300 border border-pink-500/30">
                  booking.created
                </Chip>
                <Chip className="bg-pink-500/10 text-pink-300 border border-pink-500/30">
                  user.registered
                </Chip>
                <Chip className="bg-pink-500/10 text-pink-300 border border-pink-500/30">
                  notification.sent
                </Chip>
              </div>
              <p className="text-[11px] text-gray-400">
                Loose coupling between services — workers consume and scale
                independently on consumer lag.
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-2 mt-10 pt-6 border-t border-gray-800">
            {[
              "Spring Cloud Gateway",
              "Netflix Eureka",
              "Spring Cloud LoadBalancer",
              "Resilience4j",
              "Redis Cache",
              "Apache Kafka",
              "Kubernetes HPA",
              "Docker + GitHub Actions",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-gray-700 bg-gray-800/70 px-3 py-1 text-[11px] font-mono text-gray-300"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}