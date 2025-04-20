
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    {
      title: "World-Class Medical Expertise",
      description: "Access to internationally trained specialists with experience in treating global patients."
    },
    {
      title: "Affordable Healthcare",
      description: "Save 60-80% on treatments compared to US, UK, and European countries."
    },
    {
      title: "Zero Waiting Time",
      description: "Immediate appointments and treatments without lengthy waiting periods."
    },
    {
      title: "Holistic Care Approach",
      description: "Combine modern medicine with traditional wellness practices for complete healing."
    }
  ];

  return (
    <section className="py-16 bg-health-50/50" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">ABOUT US</h2>
            <h3 className="mt-2 text-2xl font-medium text-health-700">Why Choose India for Medical Tourism?</h3>
            
            <p className="mt-6 text-lg text-gray-600">
              HealthSphere connects international patients with India's premium healthcare ecosystem, offering a perfect blend of advanced medical treatments, affordability, and personalized care.
            </p>
            
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-health-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">{benefit.title}</h4>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm">
                <span className="text-3xl font-bold text-health-700">4000+</span>
                <span className="text-sm text-gray-600">JCI Accredited Hospitals</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm">
                <span className="text-3xl font-bold text-health-700">20,000+</span>
                <span className="text-sm text-gray-600">Experienced Doctors</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm">
                <span className="text-3xl font-bold text-health-700">95%+</span>
                <span className="text-sm text-gray-600">Patient Satisfaction</span>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm">
                <span className="text-3xl font-bold text-health-700">60-80%</span>
                <span className="text-sm text-gray-600">Cost Savings</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 w-full lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern hospital in India" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">
                    India ranks among the <span className="text-health-700">top 5</span><br />
                    global medical tourism destinations
                  </p>
                </div>
              </div>
              
              <div className="absolute -left-6 -top-6 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-xl font-bold text-health-700">80%</p>
                  <p className="text-sm text-gray-600">Lower costs than US healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
