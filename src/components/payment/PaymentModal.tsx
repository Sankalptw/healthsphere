
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CreditCard, IndianRupee } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  onClose: () => void;
  amount: number;
}

const PaymentModal = ({ onClose, amount }: PaymentModalProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
      });
      onClose();
      navigate('/status');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-2 mb-6">
          <CreditCard className="h-6 w-6 text-health-600" />
          <h2 className="text-xl font-semibold">Payment Details</h2>
        </div>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Amount to Pay</p>
          <p className="text-2xl font-bold flex items-center">
            <IndianRupee className="h-5 w-5" />
            {amount.toLocaleString()}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-2 border rounded-md"
              maxLength={19}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 border rounded-md"
                maxLength={5}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full p-2 border rounded-md"
                maxLength={3}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Card Holder Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-health-600 text-white rounded-lg hover:bg-health-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
