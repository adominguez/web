import ListsOfProjects from "../components/ListsOfProjects"
import Image from "next/image"

const fetchPage = async () => {
    return fetch('https://myblog-ar9m5tg6pv.live-website.com/wp-json/wp/v2/pages?slug=sample-page', {
        next: {
            revalidate: 60
        }
    }).then(res => res.json())
}

export default async function Projects() {
    const page = await fetchPage()
    const markup = { __html: page[0]?.content?.rendered };
    return (
        <>
            <div className="m-2" dangerouslySetInnerHTML={markup} />
            {/* <section className="flex gap-6 p-12 projects bg-violet-200">
                <div>
                    <Image
                        className='self-center hidden md:block'
                        src='/alberto-dominguez.png'
                        alt='Alberto Dominguez Martín'
                        width={400}
                        height={400}
                        priority
                    />
                </div>
                <div>
                    <h1 className="py-3 text-2xl font-medium">Proyectos</h1>
                    <p>¡Bienvenidos a mi mundo creativo! Aquí, en esta página de proyectos, te invito a embarcarte en un fascinante viaje a través de los diversos campos en los que he dejado mi huella. Desde el diseño gráfico hasta la impresión, pasando por el desarrollo web, la creación de personajes y el diseño e impresión 3D, cada proyecto ha sido una oportunidad para expresar mi pasión por la creatividad y la innovación.</p>
                </div>
            </section> */}
            <div className="p-4">
                <section>
                    <p>En el mundo del diseño gráfico, he tenido el privilegio de transmitir mensajes y crear identidades visuales. Cada proyecto de diseño gráfico ha sido una emocionante oportunidad para combinar elementos estéticos y funcionales, creando una experiencia visual impactante para mis clientes. Desde el diseño de logotipos y tarjetas de visita hasta la creación de folletos y carteles, cada proyecto ha sido una oportunidad para plasmar mi creatividad y ofrecer soluciones visuales efectivas.</p>
                    <p>La impresión es el medio que da vida a mis diseños y los hace tangibles. A través de proyectos de impresión, he tenido el placer de trabajar en diferentes formatos, desde impresiones en papel hasta la producción de material promocional como camisetas y artículos personalizados. Cada proyecto de impresión ha sido un desafío emocionante para garantizar una calidad excepcional y una reproducción fiel de mis diseños, brindando a los clientes productos impresos que realmente destacan.</p>
                    <p>En el campo del diseño y desarrollo web, he creado experiencias digitales atractivas y funcionales. Desde sitios web corporativos hasta tiendas en línea y blogs personales, mi enfoque se ha centrado en la creación de interfaces intuitivas y optimizadas para el rendimiento. Utilizando tecnologías como HTML, CSS, JavaScript y frameworks como React, he construido sitios web que ofrecen una navegación fluida y una experiencia de usuario memorable.</p>
                    <p>Además, mi pasión por la creación de personajes me ha permitido dar vida a seres únicos y memorables. Desde ilustraciones en 2D hasta modelado en 3D, cada personaje es el resultado de un proceso creativo que combina concepto, diseño y atención al detalle. Estos personajes pueden encontrar aplicaciones en diversas áreas, como ilustraciones, animaciones, juegos y más, añadiendo un toque distintivo y emocionante a los proyectos en los que se involucran.</p>
                    <p>Por último, la tecnología de impresión 3D ha revolucionado mi enfoque creativo al permitirme materializar mis ideas en objetos tridimensionales. A través de proyectos de diseño e impresión 3D, he explorado nuevas formas de expresión y he creado piezas únicas y personalizadas.</p>
                    <p>En resumen, esta página de proyectos es una invitación a sumergirte en mi diverso mundo creativo. Explora cada proyecto y descubre cómo mi pasión y experiencia se entrelazan para brindar soluciones visuales y experiencias digitales excepcionales. ¡Te invito a descubrir la magia que se encuentra detrás de cada proyecto y a dejarte inspirar por mi trabajo!</p>
                </section>
                <section>
                    <ListsOfProjects />
                </section>
            </div>
        </>
    )
}