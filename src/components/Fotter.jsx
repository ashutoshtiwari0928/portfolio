export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-950/60 py-8 px-6 text-center">
      <p className="font-mono text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
          Ashutosh Tiwari
        </span>{" "}
        · Java Backend · Microservices
      </p>
      <p className="mt-2 text-xs text-gray-500 font-mono">
        Spring Cloud Gateway · Eureka · Kafka · Redis · K8s
      </p>
    </footer>
  );
}