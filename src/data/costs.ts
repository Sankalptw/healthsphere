
export interface Treatment {
  id: string;
  name: string;
  city: string;
  hospital: string;
  cost: number;
  description: string;
  duration: string;
  recoveryTime: string;
  successRate: string;
}

export const treatments: Treatment[] = [
  {
    id: "heart-surgery-delhi",
    name: "Heart Surgery",
    city: "Delhi",
    hospital: "AIIMS",
    cost: 250000,
    description: "Comprehensive cardiac surgery including bypass, valve replacement, and other heart procedures performed by top cardiologists.",
    duration: "4-6 hours",
    recoveryTime: "2-3 weeks in hospital, 2-3 months total recovery",
    successRate: "95%"
  },
  {
    id: "knee-replacement-mumbai",
    name: "Knee Replacement",
    city: "Mumbai",
    hospital: "Lilavati Hospital",
    cost: 180000,
    description: "Total knee replacement surgery using advanced techniques and high-quality prosthetics for improved mobility and reduced pain.",
    duration: "2-3 hours",
    recoveryTime: "1-2 weeks in hospital, 1-3 months total recovery",
    successRate: "97%"
  },
  {
    id: "liver-transplant-chennai",
    name: "Liver Transplant",
    city: "Chennai",
    hospital: "Apollo Hospital",
    cost: 1500000,
    description: "Complete liver transplantation procedure, including pre-op evaluation, surgery, and comprehensive post-operative care.",
    duration: "8-12 hours",
    recoveryTime: "2-4 weeks in hospital, 6-12 months total recovery",
    successRate: "85%"
  },
  {
    id: "cosmetic-surgery-bangalore",
    name: "Cosmetic Surgery",
    city: "Bangalore",
    hospital: "Manipal Hospital",
    cost: 200000,
    description: "Various cosmetic procedures including rhinoplasty, facelift, and body contouring performed by skilled plastic surgeons.",
    duration: "2-5 hours (depending on procedure)",
    recoveryTime: "1-2 weeks initial recovery, 1-3 months total recovery",
    successRate: "98%"
  },
  {
    id: "cancer-treatment-delhi",
    name: "Cancer Treatment",
    city: "Delhi",
    hospital: "Fortis",
    cost: 550000,
    description: "Comprehensive cancer care including diagnostics, surgery, chemotherapy, radiation therapy, and immunotherapy.",
    duration: "Varies based on treatment plan",
    recoveryTime: "Varies based on treatment plan",
    successRate: "Depends on cancer type and stage"
  },
  {
    id: "spinal-surgery-mumbai",
    name: "Spinal Surgery",
    city: "Mumbai",
    hospital: "Nanavati",
    cost: 400000,
    description: "Advanced spinal procedures including disc replacement, spinal fusion, and minimally invasive techniques.",
    duration: "3-7 hours",
    recoveryTime: "1-3 weeks in hospital, 3-6 months total recovery",
    successRate: "92%"
  },
  {
    id: "ivf-treatment-chennai",
    name: "IVF Treatment",
    city: "Chennai",
    hospital: "MGM Healthcare",
    cost: 150000,
    description: "Complete in vitro fertilization cycle including consultations, medications, egg retrieval, fertilization, and embryo transfer.",
    duration: "2-3 weeks (full cycle)",
    recoveryTime: "Minimal recovery time",
    successRate: "60-65% per cycle"
  },
  {
    id: "dental-implants-bangalore",
    name: "Dental Implants",
    city: "Bangalore",
    hospital: "Narayana Health",
    cost: 60000,
    description: "Full dental implant procedure including consultation, surgery, and prosthetic placement.",
    duration: "1-2 hours per implant",
    recoveryTime: "3-6 months total (between stages)",
    successRate: "98%"
  }
];
