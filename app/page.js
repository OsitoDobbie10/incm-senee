import CoverParticles from "@/components/CoverParticles";
import Container from "@/components/Container";
import PageTransition from "@/components/PageTransition";
import Introduction from "@/components/Introduction";
export default function Home() {
  return (
   <Container>
   <PageTransition/>
   <div className="flex min-h-[100vh] h-full bg-no-repeat">
   <CoverParticles/>
   <Introduction/>
   </div>
   </Container>
  );
}
