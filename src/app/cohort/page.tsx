import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import dojoLogo from "../../../public/images/dojo-coding.jpg";
import techRebelLogo from "../../../public/tech-rebel-logo.png";
import trustlessLogo from "../../../public/images/trustless-black.png";

export default function CohortPage() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <div className="flex justify-center items-center gap-4">
          <Image src={dojoLogo} alt="Dojo Coding" width={100} height={100} />
          <Image src={techRebelLogo} alt="Tech Rebel" width={120} height={100} />
          <Image src={trustlessLogo} alt="Trustless Work" width={100} height={100} />
        </div>
        <h1 className="text-4xl font-bold mt-6">Cohort 1 – Convocatoria de Productos</h1>
        <p className="text-lg text-muted-foreground">
          🚀 Un cohort para equipos de LatAm que estén construyendo productos con IA y Web3, con enfoque en lanzar rápido, tener accountability y construir en público.
        </p>
        <p className="text-lg text-muted-foreground">
          Equipos que usen <strong>Trustless Work</strong> o que sean parte de la comunidad <strong>DojoCoding</strong> son especialmente bienvenidos a aplicar.
        </p>
        <p className="text-muted-foreground">
          Es un programa de 6 semanas. ¿No sabe qué construir? <Link href="https://docs.trustlesswork.com/trustless-work/use-cases-unlocking-the-potential-of-smart-escrows" className="underline">Vea algunos casos de uso de TW aquí</Link>.
        </p>
        <Button asChild>
          <Link href="#apply">Aplica ahora</Link>
        </Button>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold">🧑‍💻 ¿Para quién es esto?</h2>
        <p>Buscamos equipos de Latinoamérica que:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Estén activamente construyendo o validando una idea</li>
          <li>Usen herramientas de IA y tengan curiosidad por Web3</li>
          <li>Busquen estructura, exposición y rendición de cuentas</li>
          <li>Trabajen en español</li>
          <li>Estén construyendo con <strong>Trustless Work</strong></li>
        </ul>
        <p>
          Los talleres serán en <strong>español</strong>, pero la mayoría del contenido escrito estará en <strong>inglés</strong>. Puedes presentar tu pitch en el idioma que prefieras. Somos una comunidad en español, pero entendemos la importancia del inglés y lo vemos como una oportunidad para practicarlo.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">✅ Requisitos para participar</h2>
        <p>
          El Cohort 1 está actualmente dirigido exclusivamente a:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Equipos donde al menos el 50% de los miembros sean parte de la comunidad <Link className="underline" href="https://dojocoding.io/">DojoCoding</Link></li>
          <li>Equipos que estén construyendo sobre <Link className="underline" href="https://www.trustlesswork.com/">Trustless Work</Link></li>
        </ul>
        <p className="mt-2">
          Si su equipo aún no cumple con estos requisitos, igual puede aplicar, pero va a entrar a una lista de espera. Quiere forzar su entrada? Compre un NFT.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">📆 Ritmo de la cohorte</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Introducción y objetivos</li>
          <li>Cliente y validación</li>
          <li>Priorización y alcance</li>
          <li>Go-To-Market y mensaje</li>
          <li>Construcción y demo</li>
          <li>Historia y cierre</li>
        </ol>
      </section>

      <section className="mt-12 space-y-4 text-center" id="apply">
        <h2 className="text-2xl font-semibold">🧾 Aplica ahora</h2>
        <p>
          Se dará prioridad a los equipos de DojoCoding y a quienes estén construyendo con Trustless Work. Otros pueden aplicar y serán añadidos a una lista de espera.
        </p>
        <Button asChild>
          <Link href="https://tally.so/r/w2RPoe">Aplicar a la Cohorte 1</Link>
        </Button>
      </section>
    </div>
  );
}
