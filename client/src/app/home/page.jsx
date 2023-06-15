import FotoHome from "@/components/FotoHome";
import Testimonials from "@/components/Testimonials";




export default function Home() {
  return (
    <div className="container mx-auto p-4 md:max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 md:max-w-full">
        {/* px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 */}
        <div className="col-span-1 ">
          {/* Contenido de la primera columna */}
          <div
            className="h-64 bg-cover bg-center rounded-md "
            style={{ backgroundImage: "url(/img/delfin.jpg) " }}
          >
            <h1 className="text-white text-2xl p-4 ">
              ONG dedicada a la protección y conservación del mundo marino.
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {/* Contenido de la segunda columna */}
          <div
            className="h-64 bg-cover bg-center rounded-md"
            style={{ backgroundImage: "url(/img/foca.jpg)" }}
          >
            <h1 className="text-white text-2xl p-4">
              Nuestra ONG se dedica a la investigación y monitoreo de especies marinas.
            </h1>
          </div>
        </div>
        <div className="col-span-1">
          {/* Contenido de la tercera columna */}
          <div
            className="h-64 bg-cover bg-center rounded-md"
            style={{ backgroundImage: "url(/img/corales.jpg)" }}
          >
            <h1 className="text-white text-2xl p-4">
              Campañas de concienciación y programas educativos.
            </h1>
          </div>
        </div>
      </div>
      <div className="md:max-w-full py-4 rounded-md bg-cover h-64">
        <FotoHome />
      </div>
      <Testimonials />
    </div>
  );
};































