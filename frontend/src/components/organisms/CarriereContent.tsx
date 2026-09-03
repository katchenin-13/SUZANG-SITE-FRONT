"use client";

import { useState } from "react";
import Image from "next/image";

type JobOffer = {
  id: number;
  title: string;
  description: string;
  type: string;
  location: string;
  email: string;
  missions?: string[];
  profil?: string[];
  modalites?: string[];
  deadline?: string;
};

const jobsData: JobOffer[] = [
  {
    id: 1,
    title: "EXPERT(E) EN COMMUNICATION PUBLICITAIRE",
    description: "Nous recherchons un(e) Expert(e) en communication publicitaire chargé(e) de concevoir, piloter et optimiser des stratégies de communication à forte valeur ajoutée.",
    type: "SUZANG GROUP",
    location: "Abidjan, Côte d'Ivoire",
    email: "contact@suzang-group.com",
    missions: [
      "Élaborer et déployer des stratégies de communication publicitaire intégrées (online et offline) en cohérence avec les objectifs marketing et commerciaux ;",
      "Concevoir et superviser les campagnes publicitaires (TV, radio, digital, affichage, réseaux sociaux...) ;",
      "Assurer la gestion des projets publicitaires : brief, coordination des agences, suivi de production et respect des délais ;",
      "Analyser les performances des campagnes (KPI, ROI, taux d'engagement) et proposer des actions d'optimisation ;",
      "Développer des concepts créatifs et innovants adaptés aux cibles et aux canaux de diffusion ;",
      "Gérer les relations avec les partenaires, agences de communication et prestataires médias ;",
      "Assurer une veille stratégique sur les tendances du marché, les innovations publicitaires et les pratiques concurrentielles ;",
      "Participer à la construction et au renforcement de l'identité de marque ;",
      "Produire et superviser les contenus publicitaires (visuels, vidéos, messages, storytelling)."
    ],
    profil: [
      "Bac +5 en communication, marketing, publicité ou domaine équivalent ;",
      "Minimum 10 ans d'expérience dans un poste similaire ;",
      "Excellente compréhension des mécanismes publicitaires et du comportement consommateur ;",
      "Forte capacité de créativité, d'analyse et de synthèse ;",
      "Excellentes compétences rédactionnelles et sens du message ;",
      "Capacité à piloter plusieurs projets simultanément avec rigueur et méthode ;",
      "Esprit stratégique, orientation résultats et sens de l'innovation ;",
      "Bon relationnel et aptitude à travailler en équipe."
    ],
    modalites: [
      "Date : dès que possible",
      "Localisation : Cocody Angré 8e tranche",
      "Contrat : CDD"
    ],
    deadline: "15 mai 2026"
  },
  {
    id: 2,
    title: "UN(E) ASSISTANT(E) PERSONNEL(LE) DU DIRECTEUR CHARGÉ(E) D'APPORTER UN APPUI TECHNIQUE",
    description: "Nous recherchons un(e) Assistant(e) personnel(le) du Directeur chargé(e) d'apporter un appui technique.",
    type: "SUZANG GROUP",
    location: "Abidjan, Côte d'Ivoire",
    email: "contact@suzang-group.com"
  },
  {
    id: 3,
    title: "RÉDACTEUR ÉDITEUR ET RÉFÉRENCEUR WEB",
    description: "Maîtrise du fonctionnement des moteurs de recherche ;",
    type: "YEFIEN",
    location: "Abidjan, Côte d'Ivoire",
    email: "contact@suzang-group.com"
  },
  {
    id: 4,
    title: "COMMUNITY MANAGER GRAPHISTE",
    description: "Maîtrise des paramétrages techniques des différentes plateformes sociales (Facebook, twitter, Instagram, YouTube, ...) ;",
    type: "YEFIEN",
    location: "Abidjan, Côte d'Ivoire",
    email: "contact@suzang-group.com"
  },
  {
    id: 5,
    title: "CONCEPTEURS ET ADMINISTRATEUR DE SITE WEB",
    description: "Maîtrise ou connaissance de base dans les langages de programmation web (PHP, JavaScript, HTML, CSS et SQL) ;",
    type: "YEFIEN",
    location: "Abidjan, Côte d'Ivoire",
    email: "contact@suzang-group.com"
  }
];

const filters = ["Toutes", "APPATAM", "DJELA", "SOCOPI", "SUZANG GROUP", "YEFIEN"];

export function CarriereContent() {
  const [activeFilter, setActiveFilter] = useState("Toutes");
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = jobsData.filter(job => 
    activeFilter === "Toutes" ? true : job.type === activeFilter
  );

  const selectedJob = jobsData.find(job => job.id === selectedJobId);

  return (
    <section className="w-full py-10 md:py-16 px-4 md:px-10 xl:px-[120px] bg-[#f4f5f7]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        
        {!selectedJob ? (
          <>
            {/* Intro text */}
            <p className="text-[14px] text-gray-600 font-light">
              Cliquez sur une carte pour lire l'offre, ou utilisez les boutons « Voir le détail » / « Postuler ».
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-[13px] font-bold uppercase transition-all duration-300 border ${
                    activeFilter === filter 
                    ? "bg-[#f9b442] border-[#f9b442] text-white shadow-md" 
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#f9b442] hover:text-[#f9b442]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Jobs List */}
            <div className="flex flex-col gap-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedJobId(job.id)}>
                  
                  {/* Image Section */}
                  <div className="w-full md:w-[300px] bg-gray-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
                    <div className="relative w-[180px] h-[220px]">
                      <Image
                        src="/images/poste.png"
                        alt="Job icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-3 uppercase tracking-wide">
                        {job.title}
                      </h3>
                      
                      <p className="text-[14px] text-gray-600 mb-4 font-light">
                        {job.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <p className="text-[13px] text-gray-600">
                          Postulez en nous faisant parvenir votre CV à l'adresse <span className="text-[#f9b442] font-semibold">{job.email}</span>
                        </p>
                        <p className="text-[13px] font-semibold text-gray-800">
                          Dossier : <span className="font-normal text-gray-600">CV + diplômes + pièce d'identité</span>
                        </p>
                        <p className="text-[13px] font-semibold text-gray-800">
                          Conditions : <span className="font-normal text-gray-600">Expérience appréciée selon le poste.</span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 mb-8">
                        <div className="flex items-center gap-2 text-[13px] text-gray-700">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                          <strong>Localisation :</strong> {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-[13px] text-gray-700">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                          <strong>Type :</strong> {job.type}
                        </div>
                        <div className="flex items-center gap-2 text-[13px] text-gray-700">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          <strong>E-mail :</strong> <span className="text-[#f9b442]">{job.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedJobId(job.id); }}
                        className="px-8 py-3.5 border-[1.5px] border-black text-black text-[15px] font-bold rounded-md hover:bg-gray-50 transition-colors duration-300"
                      >
                        Voir le détail
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedJobId(job.id); }}
                        className="px-8 py-3.5 bg-[#fbb03b] hover:bg-[#e0992a] text-white text-[15px] font-bold rounded-md flex items-center gap-2 transition-colors duration-300"
                      >
                        POSTULER
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </button>
                    </div>

                  </div>
                </div>
              ))}
              
              {filteredJobs.length === 0 && (
                <div className="w-full py-28 flex flex-col justify-center items-center bg-white rounded-xl border border-gray-100 shadow-sm text-center px-4 animate-in fade-in duration-300">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-gray-800 mb-3">Aucune offre pour le moment</h3>
                  <p className="text-[15px] text-gray-500 max-w-md leading-relaxed">
                    Il n'y a actuellement aucun poste ouvert correspondant à cette catégorie. N'hésitez pas à revenir consulter cette page plus tard !
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Detail View */
          <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setSelectedJobId(null)}
              className="flex items-center gap-1.5 text-black hover:text-[#f9b442] transition-colors self-start mb-2 font-medium text-[13px]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Toutes les offres
            </button>
            
            <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col overflow-hidden">
              
              {/* Header part (same layout as list) */}
              <div className="flex flex-col md:flex-row border-b border-gray-100">
                {/* Image Section */}
                <div className="w-full md:w-[350px] bg-gray-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100 shrink-0">
                  <div className="relative w-[220px] h-[280px]">
                    <Image
                      src="/images/poste.png"
                      alt="Job icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    {selectedJob.title}
                  </h2>
                  
                  <p className="text-[15px] text-gray-600 mb-6 font-light max-w-3xl leading-relaxed">
                    {selectedJob.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <p className="text-[14px] text-gray-600">
                      Postulez en nous faisant parvenir votre CV à l'adresse <span className="text-[#f9b442] font-semibold">{selectedJob.email}</span>
                    </p>
                    <p className="text-[14px] font-semibold text-gray-800">
                      Dossier : <span className="font-normal text-gray-600">CV + diplômes + pièce d'identité</span>
                    </p>
                    <p className="text-[14px] font-semibold text-gray-800">
                      Conditions : <span className="font-normal text-gray-600">Profil correspondant au poste (voir description ci-dessous).</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 mb-10">
                    <div className="flex items-center gap-2 text-[14px] text-gray-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <strong>Localisation :</strong> {selectedJob.location}
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-gray-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      <strong>Type :</strong> {selectedJob.type}
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-gray-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <strong>E-mail :</strong> <span className="text-[#f9b442]">{selectedJob.email}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="self-start px-8 py-3.5 bg-[#fbb03b] hover:bg-[#e0992a] text-white text-[15px] font-bold rounded-md flex items-center gap-2 transition-colors duration-300"
                  >
                    POSTULER
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
              
              {/* Detailed Text Section */}
              <div className="p-6 md:p-10 lg:p-16 flex flex-col gap-10">
                <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                  {selectedJob.description} afin de renforcer la visibilité, l'image de marque et la performance commerciale de nos clients.
                </p>

                {selectedJob.missions && selectedJob.missions.length > 0 && (
                  <div>
                    <h3 className="text-[22px] font-bold text-gray-500 uppercase mb-6 tracking-wide">VOS MISSIONS</h3>
                    <ul className="space-y-3">
                      {selectedJob.missions.map((mission, idx) => (
                        <li key={idx} className="flex gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                          <span className="text-gray-400 mt-1.5">•</span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.profil && selectedJob.profil.length > 0 && (
                  <div>
                    <h3 className="text-[22px] font-bold text-gray-500 uppercase mb-6 tracking-wide">PROFIL RECHERCHÉ</h3>
                    <ul className="space-y-3">
                      {selectedJob.profil.map((critere, idx) => (
                        <li key={idx} className="flex gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                          <span className="text-gray-400 mt-1.5">•</span>
                          <span>{critere}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.modalites && selectedJob.modalites.length > 0 && (
                  <div>
                    <h3 className="text-[22px] font-bold text-gray-500 uppercase mb-6 tracking-wide">MODALITÉS</h3>
                    <ul className="space-y-3">
                      {selectedJob.modalites.map((modalite, idx) => (
                        <li key={idx} className="flex gap-3 text-[15px] text-gray-600 font-light leading-relaxed">
                          <span className="text-gray-400 mt-1.5">•</span>
                          <span>{modalite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col gap-5 mt-2">
                  <p className="font-bold text-gray-600 text-[15px]">
                    **Les candidatures féminines sont fortement encouragées.
                  </p>
                  
                  <p className="text-[15px] text-gray-600 leading-relaxed font-light">
                    Pour postuler, transmettez-nous votre lettre de motivation, votre CV ainsi que <strong className="font-bold text-gray-700">votre prétention salariale</strong> à l'adresse e-mail suivante : <a href={`mailto:job@suzanggroup.com`} className="font-bold text-gray-700 hover:text-[#f9b442] transition-colors">job@suzanggroup.com</a>, avant la date limite de dépôt des candidatures. Veuillez inclure « Candidature - {selectedJob.title} » dans l'objet de votre e-mail.
                  </p>

                  {selectedJob.deadline && (
                    <p className="text-[15px] font-bold text-gray-600 mt-2">
                      Date limite de dépôt des candidatures : <span className="font-bold text-gray-600 ml-1">{selectedJob.deadline}</span>
                    </p>
                  )}

                  <p className="text-[15px] text-gray-500 font-light mt-4">
                    Nous remercions tous les candidats pour leur intérêt. Seuls les candidats présélectionnés seront contactés pour une entrevue.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* Application Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[600px] flex flex-col relative animate-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Fermer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Modal Header */}
            <div className="p-6 md:p-8 pb-4">
              <h2 className="text-[22px] font-bold text-black mb-2">Formulaire de candidature</h2>
              <p className="text-[14px] text-gray-500">
                <strong className="text-gray-700 font-bold">Offre : </strong> 
                {selectedJob.title}
              </p>
            </div>

            {/* Modal Form */}
            <form className="p-6 md:p-8 pt-2 flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Candidature envoyée avec succès !"); }}>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-bold text-black">Nom et prénom</label>
                <input type="text" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:border-[#f9b442] focus:ring-1 focus:ring-[#f9b442] transition-all text-[14px]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[15px] font-bold text-black">Téléphone</label>
                  <input type="tel" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:border-[#f9b442] focus:ring-1 focus:ring-[#f9b442] transition-all text-[14px]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[15px] font-bold text-black">Adresse e-mail</label>
                  <input type="email" required className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:border-[#f9b442] focus:ring-1 focus:ring-[#f9b442] transition-all text-[14px]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[15px] font-bold text-black">CV (PDF)</label>
                <input type="file" accept=".pdf" required className="w-full border border-gray-300 rounded-md bg-white text-gray-600 text-[14px] file:mr-4 file:py-2.5 file:px-4 file:border-0 file:border-r file:border-gray-300 file:bg-gray-100 file:text-gray-700 file:font-medium hover:file:bg-gray-200 cursor-pointer" />
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-[15px] font-bold text-black">Lettre de motivation (PDF)</label>
                <input type="file" accept=".pdf" required className="w-full border border-gray-300 rounded-md bg-white text-gray-600 text-[14px] file:mr-4 file:py-2.5 file:px-4 file:border-0 file:border-r file:border-gray-300 file:bg-gray-100 file:text-gray-700 file:font-medium hover:file:bg-gray-200 cursor-pointer" />
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end items-center gap-4 mt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-[15px] text-black hover:text-gray-600 font-medium px-2 py-2">
                  Annuler
                </button>
                <button type="submit" className="px-6 py-2.5 bg-[#f89c1e] hover:bg-[#e08914] text-white text-[15px] font-bold rounded-md shadow-sm transition-colors">
                  ENVOYER
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </section>
  );
}
