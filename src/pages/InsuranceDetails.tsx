
import { useParams, useNavigate } from 'react-router-dom';
import { Shield, Check, X, IndianRupee } from 'lucide-react';
import { insurancePlans } from '@/data/insurance';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import { useState, useEffect } from 'react';

const InsuranceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [plan, setPlan] = useState(insurancePlans.find(p => p.id === id));

  useEffect(() => {
    if (!id || !plan) {
      navigate('/insurance');
    }
  }, [id, plan, navigate]);

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-health-100 rounded-full -translate-y-32 translate-x-32 opacity-20" />
          
          <CardHeader className="space-y-1">
            <div className="flex items-center space-x-4">
              <Shield className="h-10 w-10 text-health-600" />
              <div>
                <CardTitle className="text-2xl font-bold">{plan.provider}</CardTitle>
                <CardDescription className="text-xl text-health-600">{plan.planName}</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Coverage Amount</h3>
                <p className="text-2xl font-bold flex items-center">
                  <IndianRupee className="h-5 w-5" />
                  {plan.coverage.toLocaleString()}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Annual Premium</h3>
                <p className="text-2xl font-bold flex items-center">
                  <IndianRupee className="h-5 w-5" />
                  {plan.premium.toLocaleString()}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Cities Covered</h3>
                <p className="text-lg">{plan.citiesCovered.join(', ')}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Coverage Benefits</h3>
                <div className="space-y-2">
                  {plan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Exclusions</h3>
                <div className="space-y-2">
                  {plan.exclusions.map((exclusion, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <X className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>{exclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Claim Process</h3>
              <p className="text-gray-600">{plan.claimProcess}</p>
            </div>

            <button
              onClick={() => setShowPayment(true)}
              className="w-full md:w-auto px-8 py-3 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors"
            >
              Purchase Plan
            </button>
          </CardContent>
        </Card>
      </main>
      <Footer />
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} amount={plan.premium} />}
    </div>
  );
};

export default InsuranceDetails;
