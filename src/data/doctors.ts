export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  city: string;
  image: string;
  description: string;
  availableDates: string[]; // ISO date strings
  rating: number;
  experience: number;
  consultationFee: number;
  availableSlots?: string[]; // Time slots like "10:00 AM - 12:00 PM"
  qualifications?: string[];
  languages?: string[];
  hospitalAddress?: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-rajesh-mehta",
    name: "Dr. Rajesh Mehta",
    specialization: "Cardiologist",
    hospital: "AIIMS",
    city: "Delhi",
    image: "https://img.freepik.com/free-photo/indian-doctor-smiling-studio-portrait_31965-24306.jpg",
    description: "Dr. Rajesh Mehta is a renowned cardiologist with over 15 years of experience in treating complex cardiac conditions. He specializes in interventional cardiology and has performed over 5,000 successful procedures.",
    availableDates: [
      "2024-06-01T10:00:00.000Z",
      "2024-06-03T14:00:00.000Z",
      "2024-06-05T11:00:00.000Z",
      "2024-06-08T09:00:00.000Z",
    ],
    rating: 4.9,
    experience: 15,
    consultationFee: 2000,
    availableSlots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    qualifications: ["MD Cardiology", "MBBS", "Fellowship in Interventional Cardiology"],
    languages: ["English", "Hindi", "Punjabi"],
    hospitalAddress: "All India Institute of Medical Sciences, Ansari Nagar, New Delhi - 110029"
  },
  {
    id: "dr-sneha-kapoor",
    name: "Dr. Sneha Kapoor",
    specialization: "Orthopedic Surgeon",
    hospital: "Fortis Hospital",
    city: "Delhi",
    image: "https://img.freepik.com/free-photo/young-female-doctor-posing-corridor-hospital_1303-21202.jpg",
    description: "Dr. Sneha Kapoor is a specialist in orthopedic surgery with a focus on joint replacements and sports injuries. She has successfully treated numerous international patients and is known for her patient-centric approach.",
    availableDates: [
      "2024-06-02T10:00:00.000Z",
      "2024-06-04T14:00:00.000Z",
      "2024-06-06T11:00:00.000Z",
      "2024-06-09T09:00:00.000Z",
    ],
    rating: 4.8,
    experience: 12,
    consultationFee: 1800,
    availableSlots: ["9:00 AM - 11:00 AM", "4:00 PM - 6:00 PM"],
    qualifications: ["MS Orthopedics", "MBBS", "Fellowship in Joint Replacement"],
    languages: ["English", "Hindi"],
    hospitalAddress: "Fortis Hospital, Shalimar Bagh, New Delhi - 110088"
  },
  {
    id: "dr-arjun-nair",
    name: "Dr. Arjun Nair",
    specialization: "Neurologist",
    hospital: "Lilavati Hospital",
    city: "Mumbai",
    image: "https://img.freepik.com/free-photo/indian-doctor-with-stethoscope-around-his-neck_23-2147896500.jpg",
    description: "Dr. Arjun Nair is a highly skilled neurologist specializing in the treatment of stroke, epilepsy, and other neurological disorders. He is known for his diagnostic accuracy and compassionate care.",
    availableDates: [
      "2024-06-01T11:00:00.000Z",
      "2024-06-03T15:00:00.000Z",
      "2024-06-07T10:00:00.000Z",
      "2024-06-10T09:00:00.000Z",
    ],
    rating: 4.7,
    experience: 14,
    consultationFee: 2200
  },
  {
    id: "dr-kavita-rao",
    name: "Dr. Kavita Rao",
    specialization: "Oncologist",
    hospital: "Nanavati Hospital",
    city: "Mumbai",
    image: "https://img.freepik.com/free-photo/indian-female-doctor_23-2147647645.jpg",
    description: "Dr. Kavita Rao is an oncologist with extensive experience in treating various types of cancer. She combines advanced medical knowledge with a holistic approach to patient care.",
    availableDates: [
      "2024-06-02T12:00:00.000Z",
      "2024-06-05T16:00:00.000Z",
      "2024-06-08T14:00:00.000Z",
      "2024-06-11T10:00:00.000Z",
    ],
    rating: 4.9,
    experience: 16,
    consultationFee: 2500
  },
  {
    id: "dr-suresh-iyer",
    name: "Dr. Suresh Iyer",
    specialization: "Spine Specialist",
    hospital: "Apollo Hospital",
    city: "Chennai",
    image: "https://img.freepik.com/free-photo/indian-doctor-portrait_107420-67286.jpg",
    description: "Dr. Suresh Iyer is a spine specialist with expertise in minimally invasive spine surgery. He has helped numerous patients recover from chronic back pain and spinal conditions.",
    availableDates: [
      "2024-06-01T09:00:00.000Z",
      "2024-06-04T13:00:00.000Z",
      "2024-06-07T11:00:00.000Z",
      "2024-06-10T15:00:00.000Z",
    ],
    rating: 4.8,
    experience: 13,
    consultationFee: 1900
  },
  {
    id: "dr-meena-reddy",
    name: "Dr. Meena Reddy",
    specialization: "Gynecologist",
    hospital: "MGM Healthcare",
    city: "Chennai",
    image: "https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg",
    description: "Dr. Meena Reddy is a gynecologist known for her expertise in women's health and fertility treatments. She provides compassionate care and is dedicated to ensuring the well-being of her patients.",
    availableDates: [
      "2024-06-02T09:00:00.000Z",
      "2024-06-05T13:00:00.000Z",
      "2024-06-08T11:00:00.000Z",
      "2024-06-11T15:00:00.000Z",
    ],
    rating: 4.9,
    experience: 12,
    consultationFee: 1800
  },
  {
    id: "dr-anil-kumar",
    name: "Dr. Anil Kumar",
    specialization: "Cosmetic Surgeon",
    hospital: "Manipal Hospital",
    city: "Bangalore",
    image: "https://img.freepik.com/free-photo/young-indian-male-doctor-posing-with-stethoscope_1157-52520.jpg",
    description: "Dr. Anil Kumar is a cosmetic surgeon with expertise in facial rejuvenation, body contouring, and reconstructive procedures. He combines artistic vision with surgical precision to achieve natural-looking results.",
    availableDates: [
      "2024-06-01T12:00:00.000Z",
      "2024-06-04T16:00:00.000Z",
      "2024-06-07T14:00:00.000Z",
      "2024-06-10T10:00:00.000Z",
    ],
    rating: 4.7,
    experience: 15,
    consultationFee: 2300
  },
  {
    id: "dr-ritu-sharma",
    name: "Dr. Ritu Sharma",
    specialization: "Pediatrician",
    hospital: "Narayana Health",
    city: "Bangalore",
    image: "https://img.freepik.com/free-photo/indian-woman-doctor_1157-26218.jpg",
    description: "Dr. Ritu Sharma is a dedicated pediatrician with a focus on children's health and development. She is known for her gentle approach and ability to connect with young patients.",
    availableDates: [
      "2024-06-02T11:00:00.000Z",
      "2024-06-05T15:00:00.000Z",
      "2024-06-08T13:00:00.000Z",
      "2024-06-11T09:00:00.000Z",
    ],
    rating: 4.8,
    experience: 10,
    consultationFee: 1600
  },
  {
    id: "dr-amit-patel",
    name: "Dr. Amit Patel",
    specialization: "Gastroenterologist",
    hospital: "Max Super Speciality Hospital",
    city: "Delhi",
    image: "https://img.freepik.com/free-photo/indian-doctor-with-stethoscope-white-lab-coat_53876-147249.jpg",
    description: "Dr. Amit Patel is a leading gastroenterologist specializing in digestive disorders and liver diseases. He is known for his expertise in advanced endoscopic procedures and patient education.",
    availableDates: [
      "2024-06-02T09:00:00.000Z",
      "2024-06-05T13:00:00.000Z",
      "2024-06-08T10:00:00.000Z",
    ],
    rating: 4.7,
    experience: 14,
    consultationFee: 1900,
    availableSlots: ["9:00 AM - 12:00 PM", "1:00 PM - 3:00 PM"],
    qualifications: ["DM Gastroenterology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Hindi", "Gujarati"],
    hospitalAddress: "Max Super Speciality Hospital, Saket, New Delhi - 110017"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialization: "Dermatologist",
    hospital: "Indraprastha Apollo Hospital",
    city: "Delhi",
    image: "https://img.freepik.com/free-photo/female-doctor-hospital_1303-9723.jpg",
    description: "Dr. Priya Sharma is a respected dermatologist with expertise in cosmetic dermatology, skin disorders, and hair restoration. She combines medical expertise with aesthetic sensibility to provide holistic skincare solutions.",
    availableDates: [
      "2024-06-01T11:00:00.000Z",
      "2024-06-04T15:00:00.000Z",
      "2024-06-07T10:00:00.000Z",
    ],
    rating: 4.8,
    experience: 10,
    consultationFee: 1700,
    availableSlots: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
    qualifications: ["MD Dermatology", "MBBS"],
    languages: ["English", "Hindi"],
    hospitalAddress: "Indraprastha Apollo Hospital, Sarita Vihar, New Delhi - 110076"
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    specialization: "Nephrologist",
    hospital: "Sir Ganga Ram Hospital",
    city: "Delhi",
    image: "https://img.freepik.com/free-photo/front-view-doctor-with-stethoscope_23-2148845834.jpg",
    description: "Dr. Vikram Singh specializes in kidney diseases, dialysis, and kidney transplantation. With his extensive experience, he has helped numerous patients with chronic kidney diseases improve their quality of life.",
    availableDates: [
      "2024-06-03T10:00:00.000Z",
      "2024-06-06T14:00:00.000Z",
      "2024-06-09T11:00:00.000Z",
    ],
    rating: 4.9,
    experience: 16,
    consultationFee: 2200,
    availableSlots: ["10:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"],
    qualifications: ["DM Nephrology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Hindi", "Punjabi"],
    hospitalAddress: "Sir Ganga Ram Hospital, Rajinder Nagar, New Delhi - 110060"
  },
  {
    id: "dr-neha-joshi",
    name: "Dr. Neha Joshi",
    specialization: "Endocrinologist",
    hospital: "Kokilaben Dhirubhai Ambani Hospital",
    city: "Mumbai",
    image: "https://img.freepik.com/free-photo/indian-female-doctor-white-coat-stethoscope-standing-with-arms-crossed_496169-2509.jpg",
    description: "Dr. Neha Joshi is a distinguished endocrinologist specializing in diabetes, thyroid disorders, and hormonal imbalances. She focuses on lifestyle modifications alongside medical interventions for comprehensive care.",
    availableDates: [
      "2024-06-01T09:00:00.000Z",
      "2024-06-04T13:00:00.000Z",
      "2024-06-07T10:00:00.000Z",
    ],
    rating: 4.7,
    experience: 11,
    consultationFee: 1800,
    availableSlots: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"],
    qualifications: ["DM Endocrinology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Hindi", "Marathi"],
    hospitalAddress: "Kokilaben Dhirubhai Ambani Hospital, Four Bungalows, Mumbai - 400053"
  },
  {
    id: "dr-rahul-desai",
    name: "Dr. Rahul Desai",
    specialization: "Pulmonologist",
    hospital: "Breach Candy Hospital",
    city: "Mumbai",
    image: "https://img.freepik.com/free-photo/male-doctor-discussing-diagnosis-middle-eastern-man-during-primary-care-visit_662251-2196.jpg",
    description: "Dr. Rahul Desai is a leading pulmonologist specializing in respiratory disorders, sleep medicine, and critical care. He employs the latest diagnostic and therapeutic approaches for respiratory health.",
    availableDates: [
      "2024-06-02T11:00:00.000Z",
      "2024-06-05T15:00:00.000Z",
      "2024-06-08T10:00:00.000Z",
    ],
    rating: 4.8,
    experience: 13,
    consultationFee: 2000,
    availableSlots: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
    qualifications: ["DM Pulmonology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    hospitalAddress: "Breach Candy Hospital, Bhulabhai Desai Road, Mumbai - 400026"
  },
  {
    id: "dr-sunita-kulkarni",
    name: "Dr. Sunita Kulkarni",
    specialization: "Rheumatologist",
    hospital: "Jaslok Hospital",
    city: "Mumbai",
    image: "https://img.freepik.com/free-photo/portrait-female-doctor-white-coat-stethoscope-around-her-neck-standing-with-arms-folded-isolated_496169-2562.jpg",
    description: "Dr. Sunita Kulkarni is a respected rheumatologist specializing in autoimmune diseases, arthritis, and inflammatory conditions. Her approach combines medication with physical therapy and lifestyle modifications.",
    availableDates: [
      "2024-06-03T10:00:00.000Z",
      "2024-06-06T14:00:00.000Z",
      "2024-06-09T11:00:00.000Z",
    ],
    rating: 4.6,
    experience: 12,
    consultationFee: 1900,
    availableSlots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    qualifications: ["DM Rheumatology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Hindi", "Marathi"],
    hospitalAddress: "Jaslok Hospital, Peddar Road, Mumbai - 400026"
  },
  {
    id: "dr-anand-krishnan",
    name: "Dr. Anand Krishnan",
    specialization: "Hematologist",
    hospital: "Apollo Hospitals",
    city: "Chennai",
    image: "https://img.freepik.com/free-photo/portrait-smiling-indian-doctor_102671-3755.jpg",
    description: "Dr. Anand Krishnan is a renowned hematologist specializing in blood disorders, leukemia, and stem cell transplantation. He has pioneered several innovative treatments in his field.",
    availableDates: [
      "2024-06-01T10:00:00.000Z",
      "2024-06-04T14:00:00.000Z",
      "2024-06-07T11:00:00.000Z",
    ],
    rating: 4.8,
    experience: 15,
    consultationFee: 2100,
    availableSlots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"],
    qualifications: ["DM Hematology", "MD Internal Medicine", "MBBS"],
    languages: ["English", "Tamil", "Hindi"],
    hospitalAddress: "Apollo Hospitals, Greams Road, Chennai - 600006"
  },
  {
    id: "dr-lakshmi-venkatesh",
    name: "Dr. Lakshmi Venkatesh",
    specialization: "Ophthalmologist",
    hospital: "Sankara Nethralaya",
    city: "Chennai",
    image: "https://img.freepik.com/free-photo/indian-woman-doctor_1157-26218.jpg",
    description: "Dr. Lakshmi Venkatesh is a distinguished ophthalmologist specializing in corneal disorders, cataract surgery, and refractive procedures. She is known for her precision and compassionate patient care.",
    availableDates: [
      "2024-06-02T09:00:00.000Z",
      "2024-06-05T13:00:00.000Z",
      "2024-06-08T10:00:00.000Z",
    ],
    rating: 4.9,
    experience: 14,
    consultationFee: 1800,
    availableSlots: ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"],
    qualifications: ["MS Ophthalmology", "MBBS", "Fellowship in Cornea"],
    languages: ["English", "Tamil"],
    hospitalAddress: "Sankara Nethralaya, College Road, Chennai - 600006"
  },
  {
    id: "dr-ramesh-subramanian",
    name: "Dr. Ramesh Subramanian",
    specialization: "Urologist",
    hospital: "MIOT International",
    city: "Chennai",
    image: "https://img.freepik.com/free-photo/indian-male-doctor-with-stethoscope_23-2147869401.jpg",
    description: "Dr. Ramesh Subramanian is a leading urologist specializing in urologic oncology, stone disease, and minimally invasive surgeries. He has introduced several advanced surgical techniques in his practice.",
    availableDates: [
      "2024-06-03T11:00:00.000Z",
      "2024-06-06T15:00:00.000Z",
      "2024-06-09T10:00:00.000Z",
    ],
    rating: 4.7,
    experience: 16,
    consultationFee: 2000,
    availableSlots: ["11:00 AM - 1:00 PM", "3:00 PM - 5:00 PM"],
    qualifications: ["MCh Urology", "MS General Surgery", "MBBS"],
    languages: ["English", "Tamil", "Malayalam"],
    hospitalAddress: "MIOT International, Manapakkam, Chennai - 600089"
  },
  {
    id: "dr-sanjay-gupta",
    name: "Dr. Sanjay Gupta",
    specialization: "Neurosurgeon",
    hospital: "Manipal Hospital",
    city: "Bangalore",
    image: "https://img.freepik.com/free-photo/young-handsome-physician-white-coat-with-stethoscope_1303-17818.jpg",
    description: "Dr. Sanjay Gupta is a distinguished neurosurgeon specializing in brain tumors, spine disorders, and cerebrovascular diseases. He is known for his precision and use of cutting-edge surgical technologies.",
    availableDates: [
      "2024-06-01T09:00:00.000Z",
      "2024-06-04T13:00:00.000Z",
      "2024-06-07T10:00:00.000Z",
    ],
    rating: 4.9,
    experience: 18,
    consultationFee: 2500,
    availableSlots: ["9:00 AM - 11:00 AM", "2:00 PM - 4:00 PM"],
    qualifications: ["MCh Neurosurgery", "MS General Surgery", "MBBS"],
    languages: ["English", "Hindi", "Kannada"],
    hospitalAddress: "Manipal Hospital, Old Airport Road, Bangalore - 560017"
  },
  {
    id: "dr-divya-murthy",
    name: "Dr. Divya Murthy",
    specialization: "Infertility Specialist",
    hospital: "Cloudnine Hospital",
    city: "Bangalore",
    image: "https://img.freepik.com/free-photo/young-female-doctor-isolated_1303-17876.jpg",
    description: "Dr. Divya Murthy is a renowned infertility specialist with expertise in IVF, reproductive endocrinology, and women's health. She has helped countless couples achieve their dream of parenthood.",
    availableDates: [
      "2024-06-02T10:00:00.000Z",
      "2024-06-05T14:00:00.000Z",
      "2024-06-08T11:00:00.000Z",
    ],
    rating: 4.8,
    experience: 12,
    consultationFee: 2200,
    availableSlots: ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"],
    qualifications: ["MD Obstetrics & Gynecology", "MBBS", "Fellowship in Reproductive Medicine"],
    languages: ["English", "Kannada", "Tamil"],
    hospitalAddress: "Cloudnine Hospital, Jayanagar, Bangalore - 560011"
  },
  {
    id: "dr-karthik-ram",
    name: "Dr. Karthik Ram",
    specialization: "Surgical Oncologist",
    hospital: "HCG Cancer Centre",
    city: "Bangalore",
    image: "https://img.freepik.com/free-photo/indian-doctor-with-medical-uniform-standing_23-2147654248.jpg",
    description: "Dr. Karthik Ram is a leading surgical oncologist specializing in gastrointestinal, breast, and thyroid cancers. He emphasizes early detection and minimally invasive surgical approaches for better outcomes.",
    availableDates: [
      "2024-06-03T11:00:00.000Z",
      "2024-06-06T15:00:00.000Z",
      "2024-06-09T10:00:00.000Z",
    ],
    rating: 4.9,
    experience: 15,
    consultationFee: 2300,
    availableSlots: ["11:00 AM - 1:00 PM", "4:00 PM - 6:00 PM"],
    qualifications: ["MCh Surgical Oncology", "MS General Surgery", "MBBS"],
    languages: ["English", "Kannada", "Hindi", "Telugu"],
    hospitalAddress: "HCG Cancer Centre, K.R. Road, Bangalore - 560004"
  }
];

export const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore"];

export const specializations = [
  "Cardiologist",
  "Orthopedic Surgeon",
  "Neurologist",
  "Oncologist",
  "Spine Specialist",
  "Gynecologist",
  "Cosmetic Surgeon",
  "Pediatrician",
  "Gastroenterologist",
  "Dermatologist", 
  "Nephrologist",
  "Endocrinologist",
  "Pulmonologist",
  "Rheumatologist",
  "Hematologist",
  "Ophthalmologist",
  "Urologist",
  "Neurosurgeon",
  "Infertility Specialist",
  "Surgical Oncologist"
];

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  services: string[];
  accreditation: string[];
  contactNumber: string;
  email?: string;
  website?: string;
  image: string;
  description: string;
}

export const hospitals: Hospital[] = [
  {
    id: "aiims-delhi",
    name: "All India Institute of Medical Sciences (AIIMS)",
    address: "Ansari Nagar, New Delhi - 110029",
    city: "Delhi",
    services: ["Cardiology", "Neurology", "Oncology", "Orthopedics", "Gastroenterology", "Transplant Services"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-11-26588500",
    email: "info@aiims.edu",
    website: "www.aiims.edu",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    description: "AIIMS Delhi is India's premier medical institution, offering comprehensive healthcare services, advanced research facilities, and high-quality medical education."
  },
  {
    id: "fortis-delhi",
    name: "Fortis Hospital",
    address: "Shalimar Bagh, New Delhi - 110088",
    city: "Delhi",
    services: ["Cardiac Care", "Orthopedics", "Neurosciences", "Oncology", "Renal Sciences", "Mother & Child"],
    accreditation: ["NABH", "ISO 9001:2015"],
    contactNumber: "+91-11-27835000",
    email: "enquiries@fortishealthcare.com",
    website: "www.fortishealthcare.com",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    description: "Fortis Hospital offers world-class healthcare services with state-of-the-art infrastructure and a team of experienced medical professionals."
  },
  {
    id: "max-delhi",
    name: "Max Super Speciality Hospital",
    address: "Saket, New Delhi - 110017",
    city: "Delhi",
    services: ["Cardiac Sciences", "Orthopedics", "Neuroscience", "Oncology", "Gastroenterology", "Transplants"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-11-26515050",
    email: "info@maxhealthcare.com",
    website: "www.maxhealthcare.in",
    image: "https://images.unsplash.com/photo-1523482580783-09612967d955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Max Super Speciality Hospital is known for its clinical excellence, patient-centric approach, and advanced medical technologies."
  },
  {
    id: "apollo-delhi",
    name: "Indraprastha Apollo Hospital",
    address: "Sarita Vihar, New Delhi - 110076",
    city: "Delhi",
    services: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Transplantation", "Robotics Surgery"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-11-26925858",
    email: "customercare@apollohospitals.com",
    website: "www.apollohospitals.com",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
    description: "Indraprastha Apollo Hospital is a multi-specialty tertiary care hospital offering cutting-edge medical technologies and treatments."
  },
  {
    id: "gangaram-delhi",
    name: "Sir Ganga Ram Hospital",
    address: "Rajinder Nagar, New Delhi - 110060",
    city: "Delhi",
    services: ["Cardiology", "Neurology", "Gastroenterology", "Nephrology", "Oncology", "Transplant Services"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-11-25750000",
    email: "info@sgrh.com",
    website: "www.sgrh.com",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    description: "Sir Ganga Ram Hospital is renowned for its clinical excellence, research, and advanced medical care across various specialties."
  },
  {
    id: "lilavati-mumbai",
    name: "Lilavati Hospital",
    address: "Bandra West, Mumbai - 400050",
    city: "Mumbai",
    services: ["Cardiology", "Neuroscience", "Oncology", "Orthopedics", "Transplantation", "Robotic Surgery"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-22-26751000",
    email: "info@lilavatihospital.com",
    website: "www.lilavatihospital.com",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Lilavati Hospital is a renowned multi-specialty hospital offering cutting-edge medical care with state-of-the-art facilities."
  },
  {
    id: "kokilaben-mumbai",
    name: "Kokilaben Dhirubhai Ambani Hospital",
    address: "Four Bungalows, Mumbai - 400053",
    city: "Mumbai",
    services: ["Cardiac Sciences", "Neurosciences", "Cancer Care", "Orthopedics", "Transplant", "Robotic Surgery"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-22-30999999",
    email: "info@kokilabenhospital.com",
    website: "www.kokilabenhospital.com",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Kokilaben Dhirubhai Ambani Hospital provides world-class healthcare with cutting-edge technology and internationally trained specialists."
  },
  {
    id: "breach-candy-mumbai",
    name: "Breach Candy Hospital",
    address: "Bhulabhai Desai Road, Mumbai - 400026",
    city: "Mumbai",
    services: ["Cardiology", "Orthopedics", "Neurology", "Gastroenterology", "Oncology", "Critical Care"],
    accreditation: ["NABH", "ISO 9001:2015"],
    contactNumber: "+91-22-23667777",
    email: "info@breachcandyhospital.org",
    website: "www.breachcandyhospital.org",
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Breach Candy Hospital is a premier healthcare institution known for its medical excellence and personalized patient care."
  },
  {
    id: "jaslok-mumbai",
    name: "Jaslok Hospital",
    address: "Peddar Road, Mumbai - 400026",
    city: "Mumbai",
    services: ["Cardiology", "Neurosciences", "Oncology", "Orthopedics", "Nephrology", "IVF"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-22-66573333",
    email: "info@jaslokhospital.net",
    website: "www.jaslokhospital.net",
    image: "https://images.unsplash.com/photo-1516549655946-ede50026d026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Jaslok Hospital is a multidisciplinary hospital offering advanced medical care with a patient-centered approach."
  },
  {
    id: "hinduja-mumbai",
    name: "P.D. Hinduja Hospital",
    address: "Mahim, Mumbai - 400016",
    city: "Mumbai",
    services: ["Cardiac Sciences", "Neurosciences", "Oncology", "Orthopedics", "Robotic Surgery", "Transplant"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-22-24451515",
    email: "info@hindujahospital.com",
    website: "www.hindujahospital.com",
    image: "https://images.unsplash.com/photo-1635107510039-669e5b4c0e3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    description: "P.D. Hinduja Hospital combines medical expertise, state-of-the-art technology, and compassionate care for comprehensive healthcare services."
  },
  {
    id: "apollo-chennai",
    name: "Apollo Hospitals",
    address: "Greams Road, Chennai - 600006",
    city: "Chennai",
    services: ["Cardiology", "Neurology", "Oncology", "Orthopedics", "Transplantation", "Robotic Surgery"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-44-28290200",
    email: "info@apollohospitals.com",
    website: "www.apollohospitals.com",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    description: "Apollo Hospitals Chennai is a flagship hospital of the Apollo Group, offering comprehensive healthcare services with a focus on clinical excellence."
  },
  {
    id: "miot-chennai",
    name: "MIOT International",
    address: "Manapakkam, Chennai - 600089",
    city: "Chennai",
    services: ["Cardiac Care", "Orthopedics", "Neurosurgery", "Oncology", "Transplant Services", "Advanced Imaging"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-44-42002288",
    email: "info@miotinternational.com",
    website: "www.miotinternational.com",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    description: "MIOT International is a multi-specialty hospital that combines advanced medical technologies with expertise to provide world-class healthcare."
  },
  {
    id: "sankara-nethralaya-chennai",
    name: "Sankara Nethralaya",
    address: "College Road, Chennai - 600006",
    city: "Chennai",
    services: ["Comprehensive Eye Care", "Cornea", "Retina", "Glaucoma", "Pediatric Ophthalmology", "Ocular Oncology"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-44-28271616",
    email: "info@sankaranethralaya.org",
    website: "www.sankaranethralaya.org",
    image: "https://images.unsplash.com/photo-1612398892068-86d510b0ecaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Sankara Nethralaya is a premier eye care institution known for its clinical excellence, research, and community eye care programs."
  },
  {
    id: "sims-chennai",
    name: "SIMS Hospital",
    address: "Vadapalani, Chennai - 600026",
    city: "Chennai",
    services: ["Cardiac Sciences", "Neurosciences", "Gastroenterology", "Orthopedics", "Oncology", "Transplant"],
    accreditation: ["NABH", "NABL"],
    contactNumber: "+91-44-24834455",
    email: "info@simshospitals.com",
    website: "www.simshospitals.com",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
    description: "SIMS Hospital provides comprehensive healthcare services with a focus on clinical excellence and advanced medical technologies."
  },
  {
    id: "kauvery-chennai",
    name: "Kauvery Hospital",
    address: "Alwarpet, Chennai - 600018",
    city: "Chennai",
    services: ["Cardiology", "Neurology", "Orthopedics", "Gastroenterology", "Oncology", "Nephrology"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-44-40006000",
    email: "info@kauveryhospital.com",
    website: "www.kauveryhospital.com",
    image: "https://images.unsplash.com/photo-1516549655946-ede50026d026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Kauvery Hospital is a multi-specialty hospital offering comprehensive healthcare services with a focus on quality and patient safety."
  },
  {
    id: "manipal-bangalore",
    name: "Manipal Hospital",
    address: "Old Airport Road, Bangalore - 560017",
    city: "Bangalore",
    services: ["Cardiac Sciences", "Neurosciences", "Orthopedics", "Oncology", "Transplant", "Robotics Surgery"],
    accreditation: ["NABH", "NABL", "JCI"],
    contactNumber: "+91-80-25023000",
    email: "info@manipalhospitals.com",
    website: "www.manipalhospitals.com",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    description: "Manipal Hospital is a multi-specialty healthcare provider known for its clinical excellence, advanced medical technologies, and comprehensive care."
  },
  {
    id: "narayana-bangalore",
    name: "Narayana Health",
    address: "Bommasandra, Bangalore - 560099",
    city: "Bangalore",
    services: ["Cardiac Care", "Cancer Care", "Neurosciences", "Orthopedics", "Nephrology", "Transplant"],
    accreditation: ["NABH", "JCI", "NABL"],
    contactNumber: "+91-80-27835000",
    email: "info@narayanahealth.org",
    website: "www.narayanahealth.org",
    image: "https://images.unsplash.com/photo-1516549655946-ede50026d026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Narayana Health is renowned for affordable, high-quality healthcare services with a focus on cardiac care and complex surgeries."
  },
  {
    id: "columbia-asia-bangalore",
    name: "Columbia Asia Hospital",
    address: "Whitefield, Bangalore - 560066",
    city: "Bangalore",
    services: ["Internal Medicine", "General Surgery", "Obstetrics & Gynecology", "Pediatrics", "Orthopedics", "Urology"],
    accreditation: ["NABH", "ISO 9001:2015"],
    contactNumber: "+91-80-41211111",
    email: "info@columbiaasia.com",
    website: "www.columbiaindiahospitals.com",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80",
    description: "Columbia Asia Hospital provides international standard healthcare services with a focus on quality, ethics, and affordability."
  },
  {
    id: "cloudnine-bangalore",
    name: "Cloudnine Hospital",
    address: "Jayanagar, Bangalore - 560011",
    city: "Bangalore",
    services: ["Obstetrics", "Gynecology", "Neonatology", "Pediatrics", "Fertility", "Fetal Medicine"],
    accreditation: ["NABH", "ISO 9001:2015"],
    contactNumber: "+91-80-67999999",
    email: "info@cloudninecare.com",
    website: "www.cloudninecare.com",
    image: "https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Cloudnine Hospital specializes in maternal, fetal, and neonatal care, providing a holistic approach to women's and children's health."
  },
  {
    id: "hcg-bangalore",
    name: "HCG Cancer Centre",
    address: "K.R. Road, Bangalore - 560004",
    city: "Bangalore",
    services: ["Surgical Oncology", "Medical Oncology", "Radiation Oncology", "Hematology", "Bone Marrow Transplant", "Nuclear Medicine"],
    accreditation: ["NABH", "NABL", "ISO 9001:2015"],
    contactNumber: "+91-80-40206000",
    email: "info@hcgoncology.com",
    website: "www.hcgoncology.com",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    description: "HCG Cancer Centre is a specialized cancer care network offering comprehensive oncology services with a focus on advanced treatments and technologies."
  }
];
