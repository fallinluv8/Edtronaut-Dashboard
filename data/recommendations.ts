export interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: 'simulation' | 'job';
  skills?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const mockRecommendations: Recommendation[] = [
  {
    id: 'sim001',
    title: 'Frontend Developer Simulation',
    type: 'simulation',
    description: 'Mô phỏng React + UI nâng cao.',
    skills: ['communication', 'analysis'],
    difficulty: 'Intermediate',
  },
  {
    id: 'sim002',
    title: 'UI/UX Mini Project',
    type: 'simulation',
    description: 'Bài tập UI giúp tăng khả năng thiết kế.',
    skills: ['analysis'],
    difficulty: 'Beginner',
  },
  {
    id: 'sim003',
    title: 'Data Analysis Challenge',
    type: 'simulation',
    description: 'Phân tích bộ dữ liệu thực tế và trả lời câu hỏi nghiệp vụ.',
    skills: ['data', 'analysis'],
    difficulty: 'Intermediate',
  },
  {
    id: 'sim004',
    title: 'AI Product Manager Simulation',
    type: 'simulation',
    description: 'Ra quyết định dựa trên dữ liệu & AI.',
    skills: ['communication', 'analysis', 'data'],
    difficulty: 'Advanced',
  },
  {
    id: 'sim005',
    title: 'Marketing Strategy Simulation',
    type: 'simulation',
    description: 'Chiến dịch marketing đa kênh với ngân sách hạn chế.',
    skills: ['marketing', 'communication'],
    difficulty: 'Beginner',
  },
  {
    id: 'sim006',
    title: 'Problem-Solving Scenario Pack',
    type: 'simulation',
    description:
      '12 tình huống mô phỏng giúp cải thiện tư duy giải quyết vấn đề.',
    skills: ['analysis'],
    difficulty: 'Intermediate',
  },

  {
    id: 'job001',
    title: 'Junior Frontend Developer – FPT Software',
    type: 'job',
    description: 'Công việc phù hợp với kinh nghiệm và skills của bạn.',
    skills: ['communication'],
  },
  {
    id: 'job002',
    title: 'Data Analyst Intern – Shopee',
    type: 'job',
    description: 'Đòi hỏi khả năng phân tích dữ liệu & trình bày insight.',
    skills: ['data', 'analysis'],
  },
  {
    id: 'job003',
    title: 'Marketing Intern – VNG',
    type: 'job',
    description: 'Phù hợp với kỹ năng content & chiến lược thương hiệu.',
    skills: ['marketing', 'communication'],
  },
  {
    id: 'job004',
    title: 'Product Intern – Tiki',
    type: 'job',
    description: 'Quản lý sản phẩm, phân tích hành vi khách hàng.',
    skills: ['analysis', 'communication'],
  },
  {
    id: 'job005',
    title: 'UX/UI Designer Intern – Be Group',
    type: 'job',
    description: 'Cải thiện trải nghiệm người dùng dựa trên nghiên cứu.',
    skills: ['analysis'],
  },
  {
    id: 'job006',
    title: 'AI Research Support Intern – VinAI',
    type: 'job',
    description: 'Hỗ trợ nghiên cứu, chuẩn bị dữ liệu và test mô hình AI.',
    skills: ['data'],
  },
];
