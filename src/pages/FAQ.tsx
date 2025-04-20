
import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageSquare } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-health-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            Find answers to common questions about medical tourism, appointments, hotels, insurance, and cost comparison.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-health-700 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-health-600" />
                General Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger className="text-left font-medium">What is HealthSphere?</AccordionTrigger>
                  <AccordionContent>
                    HealthSphere is a medical tourism platform in India that helps users book doctor appointments, find hotels, compare treatment costs, and select insurance plans in Delhi, Mumbai, Chennai, and Bangalore.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2">
                  <AccordionTrigger className="text-left font-medium">Which cities are covered by HealthSphere?</AccordionTrigger>
                  <AccordionContent>
                    Currently, we operate in Delhi, Mumbai, Chennai, and Bangalore. More cities will be added soon!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3">
                  <AccordionTrigger className="text-left font-medium">How can I use HealthSphere?</AccordionTrigger>
                  <AccordionContent>
                    <p>You can:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Book a doctor's appointment online.</li>
                      <li>Find hotels near hospitals for your stay.</li>
                      <li>Compare treatment costs across different hospitals.</li>
                      <li>Choose an insurance plan that covers your treatment.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-health-700 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-health-600" />
                Appointment & Medical Services
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q4">
                  <AccordionTrigger className="text-left font-medium">How do I book a doctor's appointment?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Select a city (Delhi, Mumbai, Chennai, Bangalore).</li>
                      <li>Choose a specialist & hospital.</li>
                      <li>Pick an available date & time.</li>
                      <li>Confirm your appointment & receive booking details via email/SMS.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5">
                  <AccordionTrigger className="text-left font-medium">Can I reschedule or cancel my appointment?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can reschedule or cancel your appointment from the "My Appointments" section. Refunds are subject to hospital policies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q6">
                  <AccordionTrigger className="text-left font-medium">Are virtual consultations available?</AccordionTrigger>
                  <AccordionContent>
                    Currently, HealthSphere focuses on in-person consultations, but virtual appointments will be introduced soon!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-health-700 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-health-600" />
                Hotel Booking & Travel Assistance
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q7">
                  <AccordionTrigger className="text-left font-medium">How do I find a hotel near my hospital?</AccordionTrigger>
                  <AccordionContent>
                    After booking your appointment, you will see a list of hotels available on your selected date. You can filter them by price, distance, and amenities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q8">
                  <AccordionTrigger className="text-left font-medium">Can I book a hotel separately without a medical appointment?</AccordionTrigger>
                  <AccordionContent>
                    Yes! You can directly use our "Find a Hotel" option to browse and book accommodations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q9">
                  <AccordionTrigger className="text-left font-medium">What are the payment options for hotel bookings?</AccordionTrigger>
                  <AccordionContent>
                    We accept credit/debit cards, UPI, net banking, and wallets.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-health-700 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-health-600" />
                Cost Finder & Insurance
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q10">
                  <AccordionTrigger className="text-left font-medium">How does the cost finder work?</AccordionTrigger>
                  <AccordionContent>
                    Our cost finder compares treatment costs across different hospitals in India. Just select your treatment type and city to get estimates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q11">
                  <AccordionTrigger className="text-left font-medium">Does HealthSphere provide insurance?</AccordionTrigger>
                  <AccordionContent>
                    We don't sell insurance directly, but we provide a list of top insurance providers covering medical expenses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q12">
                  <AccordionTrigger className="text-left font-medium">Can foreign patients use HealthSphere?</AccordionTrigger>
                  <AccordionContent>
                    Yes, international patients can use HealthSphere to plan their treatment, accommodation, and insurance. However, visa assistance is not provided at the moment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="text-xl font-semibold text-health-700 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-health-600" />
                Support & Assistance
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q13">
                  <AccordionTrigger className="text-left font-medium">How do I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    You can reach us via email, phone, or live chat (see the "Contact Us" page).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q14">
                  <AccordionTrigger className="text-left font-medium">Is there a mobile app for HealthSphere?</AccordionTrigger>
                  <AccordionContent>
                    Currently, HealthSphere is a web-based platform, but a mobile app is in development.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
