const universities = [
  {
    name: 'Tampere University',
    degree: 'Bachelor',
    country: 'Finland',
    tuition: 12000,
    program: 'Science',
    displayTitle: 'Science and Engineering',
    scholarship: '100% Scholarship',
    rank: 100
  },
  {
    name: 'Aalto University',
    degree: 'Bachelor',
    country: 'Finland',
    tuition: 12000,
    program: 'Engineering',
    displayTitle: 'Digital Systems And Design',
    scholarship: '100% Scholarship',
    rank: 100
  },
  {
    name: 'Aalto University',
    degree: 'Bachelor',
    country: 'Finland',
    tuition: 12000,
    program: 'Engineering',
    displayTitle: 'Computational Engineering',
    scholarship: '100% Scholarship',
    rank: 100
  },
  {
    name: 'Tampere University',
    degree: 'Bachelor',
    country: 'Finland',
    tuition: 12000,
    program: 'Business',
    displayTitle: 'International Business Strategies',
    scholarship: '100% Scholarship',
    rank: 100
  },
  {
    name: 'University of Heidelberg',
    degree: 'Bachelor',
    country: 'Germany',
    tuition: 12000,
    program: 'Science',
    displayTitle: 'Advanced Physics',
    scholarship: '100% Scholarship',
    rank: 100
  },
  {
    name: 'Sorbonne University',
    degree: 'Master',
    country: 'France',
    tuition: 9000,
    program: 'Arts',
    displayTitle: 'Contemporary Art Studies',
    scholarship: 'More than 50% Scholarship',
    rank: 50
  },
  {
    name: 'University of Rome',
    degree: 'Bachelor',
    country: 'Italy',
    tuition: 8000,
    program: 'Business',
    displayTitle: 'Global Leadership',
    scholarship: 'Less than 50% Scholarship',
    rank: 150
  },
  {
    name: 'University of Barcelona',
    degree: 'Master',
    country: 'Spain',
    tuition: 11000,
    program: 'Science',
    displayTitle: 'Quantum Computing',
    scholarship: 'Free',
    rank: 200
  },
  {
    name: 'University of Oxford',
    degree: 'Bachelor',
    country: 'United Kingdom',
    tuition: 20000,
    program: 'Business',
    displayTitle: 'Urban Design',
    scholarship: 'More than 50% Scholarship',
    rank: 10
  },
  {
    name: 'University of Cambridge',
    degree: 'Master',
    country: 'United Kingdom',
    tuition: 18000,
    program: 'Science',
    displayTitle: 'Artificial Intelligence and Robotics',
    scholarship: 'Less than 50% Scholarship',
    rank: 20
  },
];

const createCountryCounts = (universities) => {
  const combinations = [
    'bachelor-100',
    'bachelor-50+',
    'bachelor-<50',
    'bachelor-free',
    'master-100',
    'master-50+',
    'master-<50',
    'master-free'
  ];

  const countryCounts = {};

  universities.forEach((uni) => {
    const key = `${uni.degree.toLowerCase()}-${uni.scholarship.replace(/\s/g, '-')}`;
    const countryCode = uni.country.toUpperCase().slice(0, 3); // Example to get country code, modify as needed

    if (!countryCounts[countryCode]) {
      countryCounts[countryCode] = {};
      combinations.forEach((comb) => {
        countryCounts[countryCode][comb] = 0;
      });
    }

    if (countryCounts[countryCode][key] !== undefined) {
      countryCounts[countryCode][key]++;
    }
  });

  return countryCounts;
};

const countryCounts = createCountryCounts(universities);

export default countryCounts;