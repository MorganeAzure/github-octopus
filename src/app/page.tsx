import ContactForm from "@/app/ui/contactForm"
import Presentaion from "./ui/presentation";
//
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Bienvenue sur ma page d'accueil</h1>
      </header>
      <main className="m-4 flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Ceci est une page d'accueil simple</h2>
        <p className="text-lg text-gray-700 mb-4">
          Créée avec Next.js et stylisée avec Tailwind CSS.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded shadow">
          En savoir plus
        </button> 
      </main>
      <Presentaion />
      <ContactForm />
      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 MonSite. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
