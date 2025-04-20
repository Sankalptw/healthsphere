
export interface InsurancePlan {
  id: string;
  provider: string;
  planName: string;
  coverage: number;
  premium: number;
  citiesCovered: string[];
  benefits: string[];
  exclusions: string[];
  claimProcess: string;
}

export const insurancePlans: InsurancePlan[] = [
  {
    id: "max-bupa-health",
    provider: "Max Bupa",
    planName: "Health Companion",
    coverage: 500000,
    premium: 12000,
    citiesCovered: ["Delhi", "Mumbai", "Chennai", "Bangalore"],
    benefits: [
      "Coverage for in-patient hospitalization",
      "Pre and post hospitalization expenses",
      "Day care procedures",
      "Emergency ambulance",
      "Domestic emergency evacuation",
      "Second medical opinion",
      "Organ donor expenses"
    ],
    exclusions: [
      "Pre-existing diseases (for first 48 months)",
      "Cosmetic treatment",
      "Self-inflicted injuries",
      "Experimental treatment",
      "Non-allopathic treatment"
    ],
    claimProcess: "Submit claim form with original bills and medical reports within 30 days of discharge. Cashless facility available at network hospitals."
  },
  {
    id: "apollo-munich-optima",
    provider: "Apollo Munich",
    planName: "Optima Restore",
    coverage: 1000000,
    premium: 25000,
    citiesCovered: ["Delhi", "Mumbai"],
    benefits: [
      "Restore benefit - reinstates basic sum insured",
      "Multiplier benefit",
      "In-patient hospitalization",
      "Pre and post hospitalization expenses",
      "Day care procedures",
      "Domiciliary treatment",
      "Organ donor expenses",
      "Emergency ambulance"
    ],
    exclusions: [
      "Pre-existing diseases (for first 36 months)",
      "Cosmetic treatment",
      "Self-inflicted injuries",
      "War and nuclear weapons",
      "HIV/AIDS"
    ],
    claimProcess: "Contact Apollo Munich within 24 hours of hospitalization. Submit claim form with required documents within 15 days of discharge."
  },
  {
    id: "icici-lombard-health",
    provider: "ICICI Lombard",
    planName: "Complete Health Insurance",
    coverage: 800000,
    premium: 18000,
    citiesCovered: ["Chennai", "Bangalore"],
    benefits: [
      "In-patient hospitalization",
      "Pre and post hospitalization expenses",
      "Day care procedures",
      "Donor expenses",
      "Emergency ambulance",
      "Domiciliary hospitalization",
      "Health check-up",
      "Second opinion"
    ],
    exclusions: [
      "Pre-existing diseases (for first 48 months)",
      "Cosmetic treatment",
      "Non-allopathic treatment",
      "Experimental treatment",
      "Pregnancy and related conditions (unless specified)"
    ],
    claimProcess: "Intimate ICICI Lombard about claim within 24 hours. Submit claim form with supporting documents within 30 days."
  },
  {
    id: "star-health-medi",
    provider: "Star Health",
    planName: "Medi Classic",
    coverage: 600000,
    premium: 14000,
    citiesCovered: ["Delhi", "Chennai"],
    benefits: [
      "Hospitalization coverage",
      "Pre-hospitalization (60 days)",
      "Post-hospitalization (90 days)",
      "Day care procedures",
      "Emergency ambulance",
      "Organ donor expenses",
      "Health check-up"
    ],
    exclusions: [
      "Pre-existing diseases (for first 48 months)",
      "First 30 days waiting period (except accident)",
      "Specific waiting periods for certain diseases",
      "Cosmetic treatment",
      "Dental treatment (unless due to accident)"
    ],
    claimProcess: "Contact Star Health TPA within 24 hours of hospitalization. Submit claim documents within 30 days of discharge."
  },
  {
    id: "tata-aig-medicare",
    provider: "Tata AIG",
    planName: "Medicare",
    coverage: 700000,
    premium: 16000,
    citiesCovered: ["Mumbai", "Bangalore"],
    benefits: [
      "In-patient hospitalization",
      "Pre and post hospitalization",
      "Day care procedures",
      "Organ donor expenses",
      "Ambulance charges",
      "Daily cash allowance",
      "Convalescence benefit",
      "Critical illness cover"
    ],
    exclusions: [
      "Pre-existing diseases (for specified period)",
      "First 30 days waiting period",
      "Specific waiting periods for certain diseases",
      "Cosmetic treatment",
      "Non-medical expenses"
    ],
    claimProcess: "Notify Tata AIG within 48 hours of hospitalization. Submit claim form with supporting documents within 30 days of discharge."
  }
];
