import Container from "@/components/Container";
import PageTransition from "@/components/PageTransition";
import VistaGeneracionLecturas from "@/components/VistaGeneracionLecturas";
import CoverParticles from "@/components/CoverParticles";
const page = () => {
  return (
    <Container>
    <PageTransition/>
    <CoverParticles/>
    <VistaGeneracionLecturas/>
    </Container>
  )
}

export default page
