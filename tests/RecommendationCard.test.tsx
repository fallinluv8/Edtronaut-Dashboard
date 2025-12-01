import { render, screen } from '@testing-library/react';
import { RecommendationCard } from '@/app/dashboard/_components/recommendation/RecommendationCard';
import { ThemeProvider } from '@/context/ThemeContext';

const mockItem = {
  id: 'r001',
  title: 'Frontend Developer Simulation',
  description: 'Test description',
  type: 'simulation' as const,
};

function renderWithTheme(ui: React.ReactNode) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('RecommendationCard', () => {
  it('renders title and description', () => {
    renderWithTheme(<RecommendationCard rec={mockItem} />);

    expect(
      screen.getByText('Frontend Developer Simulation')
    ).toBeInTheDocument();

    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders correct badge', () => {
    renderWithTheme(<RecommendationCard rec={mockItem} />);

    expect(screen.getByText('Mô phỏng')).toBeInTheDocument();
  });
});
