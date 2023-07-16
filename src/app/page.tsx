import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Home() {
 return (
  <main className="flex flex-col items-center justify-between min-h-screen p-24">
   <div className="w-10/12 pt-4 mx-auto">
    <Navbar />
   </div>
   <Container />
   <div className="box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]"></div>
  </main>
 );
}
