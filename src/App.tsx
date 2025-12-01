// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Artists from "./pages/Artists";
// import ArtForms from "./pages/ArtForms";
// import Events from "./pages/Events";
// import Contribute from "./pages/Contribute";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/artists" element={<Artists />} />
//           <Route path="/art-forms" element={<ArtForms />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/contribute" element={<Contribute />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Artists from "./pages/Artists";
import ArtForms from "./pages/ArtForms";
import Events from "./pages/Events";
import Contribute from "./pages/Contribute";
import NotFound from "./pages/NotFound";

import Dance from "./pages/Dance";
import DanceTypes from "./pages/DanceTypes";
import Painting from "./pages/Paint";
import PaintTypes from "./pages/PaintTypes";
import Paint from "./pages/Paint";
import { Drama, Music } from "lucide-react";
import MusicTypes from "./pages/MusicTypes";
import Sculpture from "./pages/Sculpture";
import SculptureTypes from "./pages/SculptureTypes";
import MartialTypes from "./pages/MartialTypes";
import Martial from "./pages/Martial";
import DramaTypes from "./pages/DramaTypes";
import Musics from "./pages/Musics";
import Dramas from "./pages/Dramas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contribute" element={<Contribute />} />

          {/* Art Forms Root */}
          <Route path="/art-forms" element={<ArtForms />} />

          {/* Dance */}
          <Route path="/art-forms/dance" element={<Dance />} />
          <Route path="/art-forms/dance/:titles" element={<DanceTypes />} />

          {/* Paint */}
          <Route path="/art-forms/paint" element={<Paint />} />
          <Route path="/art-forms/paint/:titles" element={<PaintTypes />} />

          {/* Music */}
          <Route path="/art-forms/music" element={<Musics />} />
          <Route path="/art-forms/music/:titles" element={<MusicTypes />} />

          {/* Sculpture */}
          <Route path="/art-forms/sculpture" element={<Sculpture />} />
          <Route
            path="/art-forms/sculpture/:titles"
            element={<SculptureTypes />}
          />

          {/* Martial */}
          <Route path="/art-forms/martial" element={<Martial />} />
          <Route path="/art-forms/martial/:titles" element={<MartialTypes />} />

          {/* Drama */}
          <Route path="/art-forms/drama" element={<Dramas />} />
          <Route path="/art-forms/drama/:titles" element={<DramaTypes />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
