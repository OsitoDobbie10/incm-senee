import PageTransition from "@/components/PageTransition";
import Container from "@/components/Container";
import CoverParticles from "@/components/CoverParticles";
import Con1AntesPaseNoche from "@/components/Con1AntesPaseNoche";
import TransitionComponent from "@/components/TransitionComponent";
const page = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <TransitionComponent position='bottom' className='w-full'>
    <Con1AntesPaseNoche/>
    </TransitionComponent>
    </Container>
  )
}

export default page;