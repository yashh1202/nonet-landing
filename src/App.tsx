import './App.css'
import { FlowDiagram } from './components/FlowDiagram'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { RoleCard } from './components/RoleCard'

function App() {
  return (
    <div className="app" id="top">
      <Header />
      <main>
        <Hero />

        <section className="section section--prose" id="problem" aria-labelledby="problem-heading">
          <h2 id="problem-heading">Built for intermittent connectivity</h2>
          <p>
            Wallets and chains usually assume you can reach a node right now. NONET assumes the opposite:
            networks fail, access is uneven, and value still needs to move. Transactions are signed offline,
            then carried over a Bluetooth mesh until a gateway can reach Hedera.
          </p>
        </section>

        <section className="section section--prose" id="how-it-works" aria-labelledby="how-heading">
          <h2 id="how-heading">Sign now, deliver later</h2>
          <p>
            <strong>Signing</strong> is local and deterministic; <strong>delivery</strong> is asynchronous.
            A transaction only has to stay valid until it is reconstructed and submitted—not the moment it
            is created.
          </p>
          <p>
            Payloads fragment for BLE, relays store-and-forward without interpreting content, and a gateway
            reassembles, verifies, and uses the Hedera SDK to submit. The chain sees the same bytes it would
            from an online wallet.
          </p>
          <p>
            NONET stays Hedera-native on purpose: predictable fees, fast finality, and a compact transaction
            model keep each fragment small—broader multi-chain layers would bloat packets where every byte
            counts.
          </p>
          <p className="section-note">
            The system optimizes for <strong>eventual delivery under uncertainty</strong>, not lowest
            latency—by design when reliability beats speed.
          </p>
        </section>

        <section className="section section--architecture" id="architecture" aria-labelledby="arch-heading">
          <div className="section__intro">
            <h2 id="arch-heading">Architecture and flow</h2>
            <p className="section-lead">
              Three roles; one device can play more than one over time.
            </p>
          </div>
          <div className="architecture-panel">
            <div className="role-grid">
              <RoleCard title="Origin node">
                <p>
                  Creates and signs Hedera transactions locally. Integrity comes from the signature, not
                  from trusting relays.
                </p>
              </RoleCard>
              <RoleCard title="Relay node">
                <p>
                  Carries fragments and rebroadcasts. Stateless with respect to meaning—no rewriting signed
                  bytes.
                </p>
              </RoleCard>
              <RoleCard title="Gateway node">
                <p>
                  Reassembles a full transaction, checks hash and signature, submits to Hedera when online.
                </p>
              </RoleCard>
            </div>
            <FlowDiagram />
          </div>
        </section>

        <section className="section section--prose" id="security" aria-labelledby="security-heading">
          <h2 id="security-heading">Security</h2>
          <ul className="bullet-list">
            <li>
              <strong>Signed before the mesh.</strong> Relays cannot change a transaction without breaking
              the signature.
            </li>
            <li>
              <strong>Integrity and bounds.</strong> Hashes validate reassembly; TTL and dedup caches cap
              spam and runaway rebroadcast.
            </li>
          </ul>
        </section>

        <section className="section section--closing" aria-labelledby="closing-heading">
          <h2 id="closing-heading" className="visually-hidden">
            Closing
          </h2>
          <blockquote className="closing-quote">
            <p>
              From “always online” to <strong>always available</strong>—Hedera-backed value that can still
              move when the internet cannot be guaranteed.
            </p>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
