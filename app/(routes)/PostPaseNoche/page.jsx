"use client";
import Container from "@/components/Container";
import PageTransition from "@/components/PageTransition";
import UseGlobal from "@/Contexto/UseGlobal";
import TransitionComponent from "@/components/TransitionComponent";
import CoverParticles from "@/components/CoverParticles";
import FormularioEntrada from "@/components/FormularioEntrada";
import Tabla from "@/components/Tabla";
//import Item1 from "@/components/Item1";
//import Item from "@/components/Item";
const page = () => {
  const {ObjetoPostFacturacionform,GetObjetoPostFacturacionform} = UseGlobal();
  const {FechaPostFacturacion} = ObjetoPostFacturacionform;
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className="w-full h-full flex flex-col gap-3">
    <FormularioEntrada title='POST FACTURACION' 
                       p1='Pantalla Muestra lo Facturado despues de Pase Batch'
                       p2='Introduzca la fecha del PASE BATCH (YYMMDD)'
                       value='FechaPostFacturacion'
                       funcion1={GetObjetoPostFacturacionform}
                       />
    <div className="w-full">
    <Tabla/>
    </div>
    </TransitionComponent>
    </Container>
  )
}

export default page