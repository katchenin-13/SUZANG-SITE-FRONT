import Image from "next/image";
import Link from "next/link";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const SocialIcon = ({ type }: { type: 'facebook' | 'twitter' | 'linkedin' | 'instagram' }) => {
  const Icon = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    instagram: InstagramIcon
  }[type];

  return (
    <Link href="#" className="w-8 h-8 rounded bg-slate-400 hover:bg-slate-500 text-white flex items-center justify-center transition-colors">
      <Icon />
    </Link>
  );
};

export function PresentationNetworks() {
  const networks = [
    {
      name: "Yefien",
      logo: "/team/yefien.jpg",
      services: ["Marketing digitale", "Communication digitale"],
      socials: ["facebook", "linkedin"] as const
    },
    {
      name: "Socopi",
      logo: "/team/socopi.jpg",
      services: ["Immobilier", "Bien immobilier"],
      socials: ["facebook", "linkedin"] as const
    },
    {
      name: "DJELA",
      logo: "/team/djela.png",
      services: ["Evènementiel", "Montage vidéo et autre"],
      socials: ["twitter", "facebook", "instagram"] as const
    },
    {
      name: "Appatam",
      logo: "/team/appatam.jpg",
      services: ["Transformation digitale", "solution digitale"],
      socials: ["twitter", "facebook"] as const
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-10 xl:px-[120px] bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[24px] md:text-[32px] font-extrabold uppercase text-slate-600 tracking-wide mb-8">
          NOS RESEAUX D'ENTREPRISES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {networks.map((network) => (
            <div key={network.name} className="bg-white rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex items-center gap-8">
              {/* Logo Area */}
              <div className="relative w-[120px] h-[100px] shrink-0">
                {/* Fallback to text if image not found, but we will use the image component */}
                <Image
                  src={network.logo}
                  alt={network.name}
                  fill
                  className="object-contain object-center"
                />
              </div>

              {/* Text Area */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold text-slate-700">{network.name}</h3>

                <div className="flex flex-col gap-1 text-[13px] text-gray-500 mb-2">
                  {network.services.map((service, idx) => (
                    <span key={idx}>{service}</span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex items-center gap-2 mt-auto">
                  {network.socials.map((social) => (
                    <SocialIcon key={social} type={social} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
