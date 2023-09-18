import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
   return (
      <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
         <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
               <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                  TODO
               </h1>
               <button>
                  <MoonIcon />
               </button>
            </div>

            <form
               action=""
               className="mt-8 flex items-center gap-4 overflow-hidden 
               rounded-md bg-white px-3 py-3 "
            >
               <span className="inline-block h-5 w-5 rounded-full border-2"></span>
               <input
                  type="text"
                  placeholder="Create a new TODO"
                  className="w-full text-gray-400 focus:outline-none"
               />
            </form>
         </header>
         <main className="container mx-auto mt-8 px-4">
            <div className="rounded-md bg-white [&>article]:p-4 ">
               <article className="flex items-center gap-4 border-b border-b-gray-400 ">
                  <button className="inline-block h-5 w-5 flex-none rounded-full border-2" />
                  <p className="grow text-gray-600 ">
                     Complete Online Javascript curse in bluuweb
                  </p>
                  <button className="flex-none">
                     <CrossIcon />
                  </button>
               </article>
               <article className="flex items-center gap-4 border-b border-b-gray-400 ">
                  <button className="inline-block h-5 w-5 rounded-full border-2" />
                  <p className="text-gray-600">
                     Complete Online Javascript curse in bluuweb
                  </p>
                  <button>
                     <CrossIcon />
                  </button>
               </article>
               <article className="flex items-center gap-4 border-b border-b-gray-400 ">
                  <button className="inline-block h-5 w-5 rounded-full border-2" />
                  <p className="text-gray-600">
                     Complete Online Javascript curse in bluuweb
                  </p>
                  <button>
                     <CrossIcon />
                  </button>
               </article>
               <section className="mt-8 flex justify-between px-4 py-4 text-gray-400">
                  <span>5 items left</span>
                  <button>Clear Completed</button>
               </section>
            </div>
         </main>
         <section className="container mx-auto mt-8  px-4">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
               <button className="hover:text-blue-500">All</button>
               <button className="hover:text-blue-500">Active</button>
               <button className="hover:text-blue-500">Completed</button>
            </div>
         </section>

         <p className="mt-8 text-center text-gray-400">
            Drag and drop to reorder list
         </p>
      </div>
   );
};

export default App;
