export const products = [
  {
    id: 1,
    image: "https://example.com/cpu1_image.jpg",
    productname: "CPU 1",
    category: "cpu / processor",
    status: "In Stock",
    price: 150,
    description: "High-performance CPU for gaming and multitasking",
    keyfeatures:
      "Brand: Intel, Model: i7-9700K, Cores: 8, Threads: 8, Clock Speed: 3.6GHz",
    individualrating: 4.5,
    averagerating: 4.4,
    reviews: [
      { user: "User1", rating: 4, comment: "Great CPU for gaming!" },
      { user: "User2", rating: 5, comment: "Fast and reliable" },
    ],
  },
  {
    id: 2,
    image: "https://example.com/motherboard1_image.jpg",
    productname: "Motherboard 1",
    category: "motherboard",
    status: "In Stock",
    price: 120,
    description: "High-quality motherboard with multiple features",
    keyfeatures:
      "Brand: ASUS, Model: Prime B450M-A, Socket: AM4, Form Factor: Micro ATX",
    individualrating: 4.2,
    averagerating: 4.1,
    reviews: [
      {
        user: "User3",
        rating: 4,
        comment: "Reliable motherboard for AMD processors",
      },
      { user: "User4", rating: 4.5, comment: "Easy to install and setup" },
    ],
  },
  {
    id: 3,
    image: "https://example.com/ram1_image.jpg",
    productname: "RAM 1",
    category: "ram",
    status: "In Stock",
    price: 80,
    description: "8GB DDR4 RAM for smooth performance",
    keyfeatures:
      "Brand: Corsair, Capacity: 8GB, Speed: 3200MHz, CAS Latency: 16",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User5",
        rating: 5,
        comment: "Great value for money, works perfectly",
      },
      { user: "User6", rating: 4, comment: "Fast and reliable memory" },
    ],
  },
  {
    id: 4,
    image: "https://example.com/gpu1_image.jpg",
    productname: "GPU 1",
    category: "gpu",
    status: "Out of stock",
    price: 300,
    description: "High-performance GPU for graphics-intensive applications",
    keyfeatures:
      "Brand: NVIDIA, Model: RTX 3080, VRAM: 10GB GDDR6X, CUDA Cores: 8704",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      {
        user: "User7",
        rating: 5,
        comment: "Beast of a GPU, great for gaming and rendering",
      },
      {
        user: "User8",
        rating: 4.5,
        comment: "Excellent performance, but expensive",
      },
    ],
  },
  {
    id: 5,
    image: "https://example.com/hdd1_image.jpg",
    productname: "Hard Drive 1",
    category: "storage device",
    status: "In Stock",
    price: 60,
    description: "1TB HDD for reliable data storage",
    keyfeatures: "Brand: Seagate, Capacity: 1TB, RPM: 7200",
    individualrating: 4.2,
    averagerating: 4.0,
    reviews: [
      { user: "User9", rating: 4, comment: "Good value for the storage space" },
      { user: "User10", rating: 4.5, comment: "Works well, no issues so far" },
    ],
  },
  {
    id: 6,
    image: "https://example.com/monitor1_image.jpg",
    productname: "Monitor 1",
    category: "monitor",
    status: "In Stock",
    price: 250,
    description: "27-inch 1440p IPS monitor for stunning visuals",
    keyfeatures:
      "Brand: LG, Size: 27 inches, Resolution: 2560x1440, Refresh Rate: 75Hz",
    individualrating: 4.6,
    averagerating: 4.5,
    reviews: [
      {
        user: "User11",
        rating: 5,
        comment: "Beautiful colors and crisp display",
      },
      {
        user: "User12",
        rating: 4,
        comment: "Great monitor for gaming and work",
      },
    ],
  },
  {
    id: 7,
    image: "https://example.com/keyboard1_image.jpg",
    productname: "Keyboard 1",
    category: "keyboard",
    status: "In Stock",
    price: 80,
    description: "Mechanical gaming keyboard with RGB lighting",
    keyfeatures: "Brand: Razer, Switch Type: Razer Green, Connectivity: Wired",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User13",
        rating: 4,
        comment: "Nice tactile feedback, good for gaming",
      },
      { user: "User14", rating: 4.5, comment: "Impressive lighting effects" },
    ],
  },
  {
    id: 8,
    image: "https://example.com/mouse1_image.jpg",
    productname: "Mouse 1",
    category: "mouse",
    status: "In Stock",
    price: 50,
    description: "Wired gaming mouse with customizable DPI",
    keyfeatures:
      "Brand: Logitech, DPI: 800-12000, Buttons: 6, Connectivity: USB",
    individualrating: 4.3,
    averagerating: 4.2,
    reviews: [
      {
        user: "User15",
        rating: 4,
        comment: "Comfortable grip and smooth tracking",
      },
      {
        user: "User16",
        rating: 4.5,
        comment: "Precise and responsive for gaming",
      },
    ],
  },
  {
    id: 9,
    image: "https://example.com/power_supply1_image.jpg",
    productname: "Power Supply 1",
    category: "power supply unit",
    status: "In Stock",
    price: 100,
    description: "600W 80+ Bronze certified PSU for stable power delivery",
    keyfeatures: "Brand: Corsair, Wattage: 600W, Efficiency: 80+ Bronze",
    individualrating: 4.5,
    averagerating: 4.4,
    reviews: [
      {
        user: "User17",
        rating: 5,
        comment: "Reliable and efficient power supply",
      },
      { user: "User18", rating: 4, comment: "Good value for the performance" },
    ],
  },
  {
    id: 10,
    image: "https://example.com/gpu2_image.jpg",
    productname: "GPU 2",
    category: "gpu",
    status: "In Stock",
    price: 400,
    description: "Powerful GPU for high-end gaming and rendering",
    keyfeatures:
      "Brand: AMD, Model: Radeon RX 6700 XT, VRAM: 12GB GDDR6, Stream Processors: 2560",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      { user: "User19", rating: 5, comment: "Great performance, runs cool" },
      {
        user: "User20",
        rating: 4.5,
        comment: "Ray tracing looks stunning on this GPU",
      },
    ],
  },
  {
    id: 11,
    image: "https://example.com/monitor2_image.jpg",
    productname: "Monitor 2",
    category: "monitor",
    status: "Out of Stock",
    price: 300,
    description: "4K 144Hz HDR monitor for ultimate gaming experience",
    keyfeatures:
      "Brand: ASUS, Size: 27 inches, Resolution: 3840x2160, Panel Type: IPS",
    individualrating: 4.9,
    averagerating: 4.8,
    reviews: [
      {
        user: "User21",
        rating: 5,
        comment: "Top-notch monitor, worth the price",
      },
      {
        user: "User22",
        rating: 5,
        comment: "Gaming at 4K 144Hz is mind-blowing",
      },
    ],
  },
  {
    id: 12,
    image: "https://example.com/keyboard2_image.jpg",
    productname: "Keyboard 2",
    category: "keyboard",
    status: "In Stock",
    price: 100,
    description: "Wireless mechanical keyboard with RGB lighting",
    keyfeatures:
      "Brand: Corsair, Switch Type: Cherry MX Red, Connectivity: Wireless",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User23",
        rating: 5,
        comment: "Responsive and reliable wireless connection",
      },
      { user: "User24", rating: 4, comment: "Great for gaming and typing" },
    ],
  },
  {
    id: 13,
    image: "https://example.com/mouse2_image.jpg",
    productname: "Mouse 2",
    category: "mouse",
    status: "In Stock",
    price: 60,
    description: "Wireless gaming mouse with long battery life",
    keyfeatures:
      "Brand: Logitech, DPI: 100-16000, Buttons: 11, Connectivity: Wireless",
    individualrating: 4.6,
    averagerating: 4.5,
    reviews: [
      {
        user: "User25",
        rating: 4,
        comment: "Comfortable design and customizable buttons",
      },
      { user: "User26", rating: 5, comment: "Excellent wireless performance" },
    ],
  },
  {
    id: 14,
    image: "https://example.com/cpu2_image.jpg",
    productname: "CPU 2",
    category: "cpu / processor",
    status: "In Stock",
    price: 300,
    description: "High-end CPU for content creation and gaming",
    keyfeatures:
      "Brand: AMD, Model: Ryzen 9 5900X, Cores: 12, Threads: 24, Clock Speed: 3.7GHz",
    individualrating: 4.9,
    averagerating: 4.8,
    reviews: [
      {
        user: "User27",
        rating: 5,
        comment: "Beast of a CPU, handles everything effortlessly",
      },
      {
        user: "User28",
        rating: 5,
        comment: "Great for multitasking and rendering",
      },
    ],
  },
  {
    id: 15,
    image: "https://example.com/ram2_image.jpg",
    productname: "RAM 2",
    category: "ram",
    status: "In Stock",
    price: 120,
    description: "16GB DDR4 RGB RAM for gaming enthusiasts",
    keyfeatures:
      "Brand: G.Skill, Capacity: 16GB (2x8GB), Speed: 3600MHz, CAS Latency: 16",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User29",
        rating: 5,
        comment: "Stylish RGB lighting and excellent performance",
      },
      {
        user: "User30",
        rating: 4,
        comment: "Fast and stable memory, great for overclocking",
      },
    ],
  },
  {
    id: 16,
    image: "https://example.com/gpu3_image.jpg",
    productname: "GPU 3",
    category: "gpu",
    status: "In Stock",
    price: 500,
    description: "Flagship GPU for extreme gaming and rendering",
    keyfeatures:
      "Brand: NVIDIA, Model: RTX 3090, VRAM: 24GB GDDR6X, CUDA Cores: 10496",
    individualrating: 5.0,
    averagerating: 4.9,
    reviews: [
      {
        user: "User31",
        rating: 5,
        comment: "Unparalleled performance, perfect for 4K gaming",
      },
      { user: "User32", rating: 5, comment: "Expensive but worth every penny" },
    ],
  },
  {
    id: 17,
    image: "https://example.com/monitor3_image.jpg",
    productname: "Monitor 3",
    category: "monitor",
    status: "In Stock",
    price: 350,
    description: "32-inch 4K curved gaming monitor with high refresh rate",
    keyfeatures:
      "Brand: Samsung, Size: 32 inches, Resolution: 3840x2160, Refresh Rate: 144Hz",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      {
        user: "User33",
        rating: 5,
        comment: "Immersive gaming experience with the curved display",
      },
      {
        user: "User34",
        rating: 4,
        comment: "Vibrant colors and smooth gameplay",
      },
    ],
  },
  {
    id: 18,
    image: "https://example.com/keyboard3_image.jpg",
    productname: "Keyboard 3",
    category: "keyboard",
    status: "In Stock",
    price: 120,
    description: "Mechanical gaming keyboard with wrist rest",
    keyfeatures:
      "Brand: HyperX, Switch Type: Cherry MX Brown, Connectivity: Wired",
    individualrating: 4.5,
    averagerating: 4.4,
    reviews: [
      {
        user: "User35",
        rating: 4,
        comment: "Comfortable to type on, good for long gaming sessions",
      },
      {
        user: "User36",
        rating: 4.5,
        comment: "Nice tactile feedback and solid build quality",
      },
    ],
  },
  {
    id: 19,
    image: "https://example.com/mouse3_image.jpg",
    productname: "Mouse 3",
    category: "mouse",
    status: "In Stock",
    price: 70,
    description: "Wireless gaming mouse with lightweight design",
    keyfeatures: "Brand: Razer, DPI: 16000, Buttons: 8, Connectivity: Wireless",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User37",
        rating: 5,
        comment: "Perfect balance of performance and comfort",
      },
      { user: "User38", rating: 4, comment: "Great for competitive gaming" },
    ],
  },
  {
    id: 20,
    image: "https://example.com/keyboard4_image.jpg",
    productname: "Keyboard 4",
    category: "keyboard",
    status: "Out of Stock",
    price: 150,
    description: "Wireless mechanical keyboard with low-profile switches",
    keyfeatures:
      "Brand: Logitech, Switch Type: Logitech GL, Connectivity: Wireless",
    individualrating: 4.6,
    averagerating: 4.5,
    reviews: [
      {
        user: "User39",
        rating: 5,
        comment: "Smooth and quiet switches, great for office use",
      },
      {
        user: "User40",
        rating: 4,
        comment: "Good battery life and reliable wireless connection",
      },
    ],
  },
  {
    id: 21,
    image: "https://example.com/mouse4_image.jpg",
    productname: "Mouse 4",
    category: "mouse",
    status: "In Stock",
    price: 60,
    description: "Wired gaming mouse with customizable RGB lighting",
    keyfeatures: "Brand: Corsair, DPI: 12000, Buttons: 10, Connectivity: USB",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User41",
        rating: 4,
        comment: "Comfortable grip and responsive buttons",
      },
      {
        user: "User42",
        rating: 4.5,
        comment: "Nice weight and smooth tracking",
      },
    ],
  },
  {
    id: 22,
    image: "https://example.com/cpu3_image.jpg",
    productname: "CPU 3",
    category: "cpu / processor",
    status: "In Stock",
    price: 200,
    description: "Mid-range CPU for gaming and productivity",
    keyfeatures:
      "Brand: AMD, Model: Ryzen 5 5600X, Cores: 6, Threads: 12, Clock Speed: 3.7GHz",
    individualrating: 4.6,
    averagerating: 4.5,
    reviews: [
      { user: "User43", rating: 5, comment: "Great value for performance" },
      { user: "User44", rating: 4, comment: "Handles multitasking well" },
    ],
  },
  {
    id: 23,
    image: "https://example.com/ram3_image.jpg",
    productname: "RAM 3",
    category: "ram",
    status: "In Stock",
    price: 100,
    description: "16GB DDR4 RAM with stylish heatspreaders",
    keyfeatures:
      "Brand: Kingston, Capacity: 16GB (2x8GB), Speed: 3200MHz, CAS Latency: 16",
    individualrating: 4.3,
    averagerating: 4.2,
    reviews: [
      {
        user: "User45",
        rating: 4,
        comment: "Reliable memory with nice design",
      },
      {
        user: "User46",
        rating: 4.5,
        comment: "Decent performance at an affordable price",
      },
    ],
  },
  {
    id: 24,
    image: "https://example.com/gpu4_image.jpg",
    productname: "GPU 4",
    category: "gpu",
    status: "Out of Stock",
    price: 600,
    description: "Enthusiast GPU for 4K gaming and content creation",
    keyfeatures:
      "Brand: AMD, Model: Radeon RX 6900 XT, VRAM: 16GB GDDR6, Stream Processors: 5120",
    individualrating: 4.9,
    averagerating: 4.8,
    reviews: [
      {
        user: "User47",
        rating: 5,
        comment: "Top-tier GPU, handles everything I throw at it",
      },
      { user: "User48", rating: 5, comment: "Expensive but worth every penny" },
    ],
  },
  {
    id: 25,
    image: "https://example.com/monitor4_image.jpg",
    productname: "Monitor 4",
    category: "monitor",
    status: "In Stock",
    price: 280,
    description: "24-inch 1080p IPS monitor for color accuracy",
    keyfeatures:
      "Brand: BenQ, Size: 24 inches, Resolution: 1920x1080, Refresh Rate: 75Hz",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User49",
        rating: 4,
        comment: "Nice picture quality, good for photo editing",
      },
      {
        user: "User50",
        rating: 4.5,
        comment: "Affordable and reliable monitor",
      },
    ],
  },
  {
    id: 26,
    image: "https://example.com/keyboard5_image.jpg",
    productname: "Keyboard 5",
    category: "keyboard",
    status: "In Stock",
    price: 100,
    description: "Mechanical keyboard with customizable RGB lighting",
    keyfeatures:
      "Brand: SteelSeries, Model: Apex Pro, Connectivity: Wired, Switch Type: OmniPoint Adjustable",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User51",
        rating: 5,
        comment: "Super smooth switches, love the customizable actuation",
      },
      {
        user: "User52",
        rating: 4,
        comment: "Premium build quality and attractive lighting",
      },
    ],
  },
  {
    id: 27,
    image: "https://example.com/mouse5_image.jpg",
    productname: "Mouse 5",
    category: "mouse",
    status: "Out of Stock",
    price: 50,
    description: "Wired gaming mouse with customizable DPI",
    keyfeatures: "Brand: Corsair, DPI: 8000, Buttons: 7, Connectivity: USB",
    individualrating: 4.2,
    averagerating: 4.1,
    reviews: [
      { user: "User53", rating: 4, comment: "Good value for the price" },
      {
        user: "User54",
        rating: 4.5,
        comment: "Comfortable grip, great for claw grip users",
      },
    ],
  },
  {
    id: 28,
    image: "https://example.com/cpu4_image.jpg",
    productname: "CPU 4",
    category: "cpu / processor",
    status: "In Stock",
    price: 180,
    description: "Quad-core CPU for everyday computing",
    keyfeatures:
      "Brand: Intel, Model: Core i5-11600K, Cores: 6, Threads: 12, Clock Speed: 3.9GHz",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User55",
        rating: 4,
        comment: "Decent CPU for office tasks and light gaming",
      },
      {
        user: "User56",
        rating: 4.5,
        comment: "Good value for the performance",
      },
    ],
  },
  {
    id: 29,
    image: "https://example.com/ram4_image.jpg",
    productname: "RAM 4",
    category: "ram",
    status: "In Stock",
    price: 90,
    description: "8GB DDR4 RAM for basic computing needs",
    keyfeatures:
      "Brand: Crucial, Capacity: 8GB, Speed: 2400MHz, CAS Latency: 17",
    individualrating: 4.2,
    averagerating: 4.1,
    reviews: [
      { user: "User57", rating: 4, comment: "Sufficient for everyday tasks" },
      {
        user: "User58",
        rating: 4.5,
        comment: "Reliable memory at an affordable price",
      },
    ],
  },
  {
    id: 30,
    image: "https://example.com/gpu5_image.jpg",
    productname: "GPU 5",
    category: "gpu",
    status: "In Stock",
    price: 250,
    description: "Entry-level GPU for casual gaming",
    keyfeatures:
      "Brand: NVIDIA, Model: GTX 1650, VRAM: 4GB GDDR5, CUDA Cores: 896",
    individualrating: 4.1,
    averagerating: 4.0,
    reviews: [
      {
        user: "User59",
        rating: 4,
        comment: "Decent performance for the price",
      },
      {
        user: "User60",
        rating: 4.5,
        comment: "Runs most games at medium settings",
      },
    ],
  },
  {
    id: 31,
    image: "https://example.com/monitor5_image.jpg",
    productname: "Monitor 5",
    category: "monitor",
    status: "In Stock",
    price: 200,
    description: "24-inch 1080p gaming monitor with high refresh rate",
    keyfeatures:
      "Brand: AOC, Size: 24 inches, Resolution: 1920x1080, Refresh Rate: 144Hz",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User61",
        rating: 4,
        comment: "Smooth gaming experience with high refresh rate",
      },
      {
        user: "User62",
        rating: 4.5,
        comment: "Affordable and reliable monitor for gaming",
      },
    ],
  },
  {
    id: 32,
    image: "https://example.com/keyboard6_image.jpg",
    productname: "Keyboard 6",
    category: "keyboard",
    status: "In Stock",
    price: 80,
    description: "Membrane gaming keyboard with RGB lighting",
    keyfeatures: "Brand: Redragon, Connectivity: Wired, Backlight: RGB",
    individualrating: 4.3,
    averagerating: 4.2,
    reviews: [
      {
        user: "User63",
        rating: 4,
        comment: "Affordable keyboard with nice lighting effects",
      },
      { user: "User64", rating: 4.5, comment: "Good for entry-level gamers" },
    ],
  },
  {
    id: 33,
    image: "https://example.com/mouse6_image.jpg",
    productname: "Mouse 6",
    category: "mouse",
    status: "In Stock",
    price: 40,
    description: "Budget gaming mouse with adjustable DPI",
    keyfeatures: "Brand: Havit, DPI: 800-3200, Buttons: 6, Connectivity: USB",
    individualrating: 4.0,
    averagerating: 3.9,
    reviews: [
      { user: "User65", rating: 3, comment: "Decent mouse for the price" },
      {
        user: "User66",
        rating: 4,
        comment: "Comfortable grip and smooth tracking",
      },
    ],
  },
  {
    id: 34,
    image: "https://example.com/cpu5_image.jpg",
    productname: "CPU 5",
    category: "cpu / processor",
    status: "In Stock",
    price: 250,
    description: "Hexa-core CPU for multitasking and light gaming",
    keyfeatures:
      "Brand: Intel, Model: Core i5-11600, Cores: 6, Threads: 12, Clock Speed: 2.8GHz",
    individualrating: 4.4,
    averagerating: 4.3,
    reviews: [
      {
        user: "User67",
        rating: 4,
        comment: "Good balance of performance and price",
      },
      { user: "User68", rating: 4.5, comment: "Handles everyday tasks well" },
    ],
  },
  {
    id: 35,
    image: "https://example.com/ram5_image.jpg",
    productname: "RAM 5",
    category: "ram",
    status: "Out of Stock",
    price: 70,
    description: "8GB DDR4 RAM for basic computing needs",
    keyfeatures:
      "Brand: Teamgroup, Capacity: 8GB, Speed: 2666MHz, CAS Latency: 19",
    individualrating: 4.1,
    averagerating: 4.0,
    reviews: [
      { user: "User69", rating: 4, comment: "Affordable and reliable memory" },
      { user: "User70", rating: 4.5, comment: "Sufficient for everyday use" },
    ],
  },
  {
    id: 36,
    image: "https://example.com/gpu6_image.jpg",
    productname: "GPU 6",
    category: "gpu",
    status: "In Stock",
    price: 350,
    description: "High-performance GPU for gaming and rendering",
    keyfeatures:
      "Brand: NVIDIA, Model: RTX 3060 Ti, VRAM: 8GB GDDR6, CUDA Cores: 4864",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      {
        user: "User71",
        rating: 5,
        comment: "Fantastic GPU, handles everything smoothly",
      },
      {
        user: "User72",
        rating: 4.5,
        comment: "Great value for the performance",
      },
    ],
  },
  {
    id: 37,
    image: "https://example.com/monitor6_image.jpg",
    productname: "Monitor 6",
    category: "monitor",
    status: "In Stock",
    price: 300,
    description: "27-inch 1440p gaming monitor with fast response time",
    keyfeatures:
      "Brand: ViewSonic, Size: 27 inches, Resolution: 2560x1440, Refresh Rate: 165Hz",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User73",
        rating: 5,
        comment: "Smooth gaming experience with high refresh rate",
      },
      {
        user: "User74",
        rating: 4,
        comment: "Vibrant colors and sharp visuals",
      },
    ],
  },
  {
    id: 38,
    image: "https://example.com/keyboard7_image.jpg",
    productname: "Keyboard 7",
    category: "keyboard",
    status: "In Stock",
    price: 130,
    description: "Wireless mechanical keyboard with RGB lighting",
    keyfeatures:
      "Brand: Ducky, Switch Type: Cherry MX Blue, Connectivity: Wireless",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      {
        user: "User75",
        rating: 5,
        comment: "Excellent build quality and typing experience",
      },
      {
        user: "User76",
        rating: 4,
        comment: "Wireless functionality works flawlessly",
      },
    ],
  },
  {
    id: 39,
    image: "https://example.com/mouse7_image.jpg",
    productname: "Mouse 7",
    category: "mouse",
    status: "In Stock",
    price: 55,
    description: "Ergonomic gaming mouse with adjustable weights",
    keyfeatures:
      "Brand: SteelSeries, DPI: 100-18000, Buttons: 7, Connectivity: USB",
    individualrating: 4.5,
    averagerating: 4.4,
    reviews: [
      {
        user: "User77",
        rating: 4,
        comment: "Comfortable design for long gaming sessions",
      },
      {
        user: "User78",
        rating: 4.5,
        comment: "Smooth tracking and precise clicks",
      },
    ],
  },
  {
    id: 40,
    image: "https://example.com/cpu6_image.jpg",
    productname: "CPU 6",
    category: "cpu / processor",
    status: "In Stock",
    price: 220,
    description: "Octa-core CPU for gaming and content creation",
    keyfeatures:
      "Brand: AMD, Model: Ryzen 7 5800X, Cores: 8, Threads: 16, Clock Speed: 3.8GHz",
    individualrating: 4.9,
    averagerating: 4.8,
    reviews: [
      {
        user: "User79",
        rating: 5,
        comment: "Powerful and efficient CPU for demanding tasks",
      },
      { user: "User80", rating: 5, comment: "Great for gaming and rendering" },
    ],
  },
  {
    id: 41,
    image: "https://example.com/ram6_image.jpg",
    productname: "RAM 6",
    category: "ram",
    status: "In Stock",
    price: 110,
    description: "32GB DDR4 RAM for heavy multitasking and content creation",
    keyfeatures:
      "Brand: Corsair, Capacity: 32GB (2x16GB), Speed: 3600MHz, CAS Latency: 18",
    individualrating: 4.8,
    averagerating: 4.7,
    reviews: [
      { user: "User81", rating: 5, comment: "Excellent performance and speed" },
      {
        user: "User82",
        rating: 4.5,
        comment: "Handles multiple applications with ease",
      },
    ],
  },
  {
    id: 42,
    image: "https://example.com/gpu7_image.jpg",
    productname: "GPU 7",
    category: "gpu",
    status: "Out of Stock",
    price: 450,
    description: "High-performance GPU for 1440p gaming and rendering",
    keyfeatures:
      "Brand: AMD, Model: Radeon RX 6800, VRAM: 16GB GDDR6, Stream Processors: 3840",
    individualrating: 4.9,
    averagerating: 4.8,
    reviews: [
      {
        user: "User83",
        rating: 5,
        comment: "Fantastic GPU, handles all modern games",
      },
      {
        user: "User84",
        rating: 5,
        comment: "Ray tracing looks amazing on this GPU",
      },
    ],
  },
  {
    id: 43,
    image: "https://example.com/monitor7_image.jpg",
    productname: "Monitor 7",
    category: "monitor",
    status: "In Stock",
    price: 400,
    description:
      "34-inch ultrawide monitor for immersive gaming and productivity",
    keyfeatures:
      "Brand: LG, Size: 34 inches, Resolution: 3440x1440, Panel Type: IPS",
    individualrating: 4.7,
    averagerating: 4.6,
    reviews: [
      {
        user: "User85",
        rating: 5,
        comment: "Stunning ultrawide display, great for multitasking",
      },
      {
        user: "User86",
        rating: 4,
        comment: "Smooth gaming experience with high refresh rate",
      },
    ],
  },
  {
    id: 44,
    image: "https://example.com/motherboard1_image.jpg",
    productname: "Motherboard 2",
    category: "motherboard",
    status: "Out of stock",
    price: 100,
    description: "High-quality motherboard with multiple features",
    keyfeatures:
      "Brand: ASUS, Model: Prime B450M-A, Socket: AM4, Form Factor: Micro ATX",
    individualrating: 4.2,
    averagerating: 5,
    reviews: [
      {
        user: "User3",
        rating: 4,
        comment: "Reliable motherboard for AMD processors",
      },
      { user: "User4", rating: 4.5, comment: "Easy to install and setup" },
    ],
  },
  {
    id: 45,
    image: "https://example.com/motherboard1_image.jpg",
    productname: "Motherboard 3",
    category: "motherboard",
    status: "In Stock",
    price: 450,
    description: "High-quality motherboard with multiple features",
    keyfeatures:
      "Brand: ASUS, Model: Prime B450M-A, Socket: AM4, Form Factor: Micro ATX",
    individualrating: 4.2,
    averagerating: 4.9,
    reviews: [
      {
        user: "User3",
        rating: 4,
        comment: "Reliable motherboard for AMD processors",
      },
      { user: "User4", rating: 4.5, comment: "Easy to install and setup" },
    ],
  },
  {
    id: 46,
    image: "https://example.com/power_supply1_image.jpg",
    productname: "Power Supply 2",
    category: "power supply unit",
    status: "In Stock",
    price: 560,
    description: "600W 80+ Bronze certified PSU for stable power delivery",
    keyfeatures: "Brand: Corsair, Wattage: 600W, Efficiency: 80+ Bronze",
    individualrating: 4.5,
    averagerating: 5,
    reviews: [
      {
        user: "User17",
        rating: 5,
        comment: "Reliable and efficient power supply",
      },
      { user: "User18", rating: 4, comment: "Good value for the performance" },
    ],
  },
  {
    id: 47,
    image: "https://example.com/power_supply1_image.jpg",
    productname: "Power Supply 3",
    category: "power supply unit",
    status: "Out of stock",
    price: 560,
    description: "600W 80+ Bronze certified PSU for stable power delivery",
    keyfeatures: "Brand: Corsair, Wattage: 600W, Efficiency: 80+ Bronze",
    individualrating: 4.5,
    averagerating: 5,
    reviews: [
      {
        user: "User17",
        rating: 5,
        comment: "Reliable and efficient power supply",
      },
      { user: "User18", rating: 4, comment: "Good value for the performance" },
    ],
  },
  {
    id: 48,
    image: "https://example.com/hdd1_image.jpg",
    productname: "Hard Drive 2",
    category: "storage device",
    status: "In Stock",
    price: 70,
    description: "1TB HDD for reliable data storage",
    keyfeatures: "Brand: Seagate, Capacity: 1TB, RPM: 7200",
    individualrating: 4.2,
    averagerating: 4.0,
    reviews: [
      { user: "User9", rating: 4, comment: "Good value for the storage space" },
      { user: "User10", rating: 4.5, comment: "Works well, no issues so far" },
    ],
  },
  {
    id: 49,
    image: "https://example.com/hdd1_image.jpg",
    productname: "Hard Drive 3",
    category: "storage device",
    status: "Out of Stock",
    price: 50,
    description: "1TB HDD for reliable data storage",
    keyfeatures: "Brand: Seagate, Capacity: 1TB, RPM: 7200",
    individualrating: 4.2,
    averagerating: 4.6,
    reviews: [
      { user: "User9", rating: 4, comment: "Good value for the storage space" },
      { user: "User10", rating: 4.5, comment: "Works well, no issues so far" },
    ],
  },
];