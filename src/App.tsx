import React, { useEffect, useState } from 'react';

/**
 * Main application component for the DORDRONE site.
 * It presents a hero section, tabbed services, portfolio,
 * testimonials, a contact form, and footer with legal information.
 */
export default function App(): JSX.Element {
  const [tab, setTab] = useState<'drones' | 'it' | 'ia' | 'travaux'>('drones');

  useEffect(() => {
    document.title = 'DORDRONE – Drones, Informatique, IA, Petits Travaux';
  }, []);

  // Lightweight YouTube embed: only loads iframe on demand
  type YTProps = { id: string; title: string };
  const YouTubeLite: React.FC<YTProps> = ({ id, title }) => {
    const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    const embed = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
    const [activated, setActivated] = useState(false);
    return (
      <div className="relative w-full overflow-hidden rounded-lg bg-black">
        {!activated ? (
          <button
            type="button"
            onClick={() => setActivated(true)}
            className="group block w-full focus:outline-none"
            aria-label={`Lire la vidéo ${title}`}
          >
            <img src={poster} alt={title} className="w-full h-60 object-cover" loading="lazy" />
            <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/40 transition">
              <span className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-full shadow">
                ▶ Lire la vidéo
              </span>
            </div>
          </button>
        ) : (
          <iframe
            src={embed}
            title={title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-60"
          />
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <header className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <img
          src="/logo-dordrone.png"
          alt="Logo DORDRONE"
          className="mx-auto w-40 h-40 object-contain"
        />
        <h1 className="text-4xl font-extrabold mt-3">DORDRONE</h1>
        <p className="text-gray-600 mt-1">Dordogne – Nouvelle-Aquitaine</p>
        <p className="mt-2 text-lg">
          Solutions locales : <strong>drones</strong>, <strong>dépannage informatique</strong>,{' '}
          <strong>formations IA</strong>,<strong> petits travaux & domotique</strong>.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <a
            href="#contact"
            className="bg-green-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-green-700"
          >
            Demander un devis
          </a>
          <a
            href="#services"
            className="bg-gray-900 text-white px-5 py-2 rounded-2xl shadow hover:bg-black"
          >
            Voir les services
          </a>
          <a
            href="https://wa.me/33688608222?text=Bonjour%20DORDRONE%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services."
            target="_blank"
            rel="noreferrer"
            aria-label="Contacter via WhatsApp"
            className="bg-[#25D366] text-white px-5 py-2 rounded-2xl shadow hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* TABS SERVICES */}
      <section id="services" className="max-w-5xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border p-4 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {[
              { key: 'drones', label: 'Drones' },
              { key: 'it', label: 'Dépannage informatique' },
              { key: 'ia', label: 'Formations IA' },
              { key: 'travaux', label: 'Petits travaux' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key as typeof tab)}
                className={`px-3 py-2 rounded-xl text-sm font-medium border transition ${
                  tab === (t.key as typeof tab)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'drones' && (
            <div className="p-2">
              <h2 className="text-2xl font-semibold mb-2">Services Drone</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Captation photo / vidéo aérienne (événements, immobilier, tourisme)</li>
                <li>Inspection visuelle : toitures, panneaux solaires, ouvrages</li>
                <li>Suivi de chantier (timelapse, progression)</li>
                <li>Cartographie 2D/3D & orthophotos</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Interventions réalisées dans le respect de la réglementation européenne (cat. Ouverte/Spécifique),
                zones autorisées et règles de sécurité. Assurance RC professionnelle.
              </p>
            </div>
          )}

          {tab === 'it' && (
            <div className="p-2">
              <h2 className="text-2xl font-semibold mb-2">Dépannage Informatique</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Réinstallation système, nettoyage, suppression de virus</li>
                <li>Montage / réparation PC, SSD upgrade, sauvegardes</li>
                <li>Assistance à domicile et à distance</li>
                <li>Réseau & Wi‑Fi (box, répéteurs, sécurité de base)</li>
              </ul>
            </div>
          )}

          {tab === 'ia' && (
            <div className="p-2">
              <h2 className="text-2xl font-semibold mb-2">Formations IA</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Initiation à l’IA générative (bases, usages, limites)</li>
                <li>Ateliers « Utiliser ChatGPT au quotidien »</li>
                <li>IA pour TPE/PME : automatisations simples, prompts</li>
                <li>Sessions personnalisées (présentiel / visio)</li>
              </ul>
            </div>
          )}

          {tab === 'travaux' && (
            <div className="p-2">
              <h2 className="text-2xl font-semibold mb-2">Petits Travaux & Domotique</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Installations électriques simples (luminaires, prises, interrupteurs)</li>
                <li>Montage de meubles et petits aménagements</li>
                <li>Installation de détecteurs, caméras, sonnette connectée</li>
                <li>Configuration domotique (Wi‑Fi, objets connectés)</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* A PROPOS */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-2">À propos</h2>
          <p className="text-gray-700">
            Je suis <strong>Gonzalo Miguez</strong>, entrepreneur local. Avec DORDRONE, j’aide les particuliers
            et les professionnels en Dordogne (Nouvelle‑Aquitaine) avec des prestations fiables, rapides et
            transparentes.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border p-6 shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Réalisations récentes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border rounded-xl p-3 bg-white">
              <YouTubeLite id="Lnxdq4cxgsA" title="Vidéo Drone 1" />
              <p className="mt-2 text-sm text-gray-700">Exemple de réalisation drone publiée sur YouTube.</p>
            </div>
            <div className="border rounded-xl p-3 bg-white">
              <YouTubeLite id="50sKSjJK11U" title="Vidéo Drone 2" />
              <p className="mt-2 text-sm text-gray-700">Exemple de réalisation drone publiée sur YouTube.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="max-w-5xl mx-auto px-4 pb-8">
        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-4">Avis clients</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                q: 'Intervention rapide et très pro pour notre réseau Wi‑Fi au bureau.',
                a: 'Claire, artisane',
              },
              {
                q: 'Super captation drone pour la promotion de notre gîte !',
                a: 'Marc, propriétaire de gîte',
              },
              { q: 'Atelier IA clair, concret et utile pour l’équipe.', a: 'Sonia, TPE locale' },
            ].map((t, i) => (
              <figure key={i} className="border rounded-xl p-4 bg-gray-50">
                <blockquote className="text-gray-700">“{t.q}”</blockquote>
                <figcaption className="mt-2 text-sm text-gray-500">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto px-4 pb-12">
        <div className="rounded-2xl border p-6 shadow-sm bg-white">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="mb-4 space-y-1">
            <p>
              👤 <strong>Gonzalo Miguez</strong>
            </p>
            <p>📍 Dordogne, interventions Nouvelle‑Aquitaine</p>
            <p>
              📧 Email :{' '}
              <a href="mailto:dordrone2446@gmail.com" className="text-blue-600 underline">
                dordrone2446@gmail.com
              </a>
            </p>
            <p>
              📞 Tél. :{' '}
              <a href="tel:+33688608222" className="text-blue-600 underline">
                06 88 60 82 22
              </a>
              <a
                href="https://wa.me/33688608222?text=Bonjour%20DORDRONE%2C%20je%20souhaite%20des%20informations%20sur%20vos%20services."
                target="_blank"
                rel="noreferrer"
                className="ml-3 inline-block bg-[#25D366] text-white px-3 py-1 rounded-lg hover:opacity-90"
              >
                WhatsApp
              </a>
            </p>
            <p>
              🔗 LinkedIn :
              <a
                href="https://linkedin.com/in/gonzalomiguez"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline ml-1"
              >
                linkedin.com/in/gonzalomiguez
              </a>
            </p>
          </div>

          {/* Netlify-ready form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="grid sm:grid-cols-2 gap-4"
            action="/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out <input name="bot-field" />
              </label>
            </p>

            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input
                name="name"
                required
                className="mt-1 w-full border rounded-md p-2"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border rounded-md p-2"
                placeholder="vous@exemple.fr"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                className="mt-1 w-full border rounded-md p-2"
                rows={5}
                placeholder="Votre message"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* LEGAL */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-2">DORDRONE</h3>
            <p>Prestations drones, informatique, IA & petits travaux en Dordogne.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Mentions légales</h3>
            <p>Entreprise individuelle – Dir.: Gonzalo Miguez</p>
            <p>Siège : Dordogne, France</p>
            <p>RC Pro : (indiquer l’assureur)</p>
            <p>SIREN / SIRET : (à compléter)</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Confidentialité</h3>
            <p>
              Les données saisies via le formulaire sont utilisées uniquement pour répondre à votre demande.
            </p>
            <p>
              Vous pouvez demander leur suppression par e‑mail :
              <a href="mailto:dordrone2446@gmail.com" className="text-blue-400 underline ml-1">
                dordrone2446@gmail.com
              </a>.
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pb-6">
          © {new Date().getFullYear()} DORDRONE – Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}