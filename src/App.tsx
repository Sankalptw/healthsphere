
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import BookAppointment from "./pages/BookAppointment";
import Status from "./pages/Status";
import Profile from "./pages/Profile";
import Hotels from "./pages/Hotels";
import Insurance from "./pages/Insurance";
import FindCost from "./pages/FindCost";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import InsuranceDetails from "./pages/InsuranceDetails";
import HotelDetails from "./pages/HotelDetails";
import Flights from "./pages/Flights";
import Recovery from "./pages/Recovery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/status" element={<Status />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/insurance/:id" element={<InsuranceDetails />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/find-cost" element={<FindCost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
