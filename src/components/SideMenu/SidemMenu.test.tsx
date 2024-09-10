import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import SideMenu from '../SideMenu';
import { fetchAllKantoPokemon } from '../../fetchers/getPokemon';

jest.mock('../../fetchers/getPokemon', () => ({
  fetchAllKantoPokemon: jest.fn(),
}));

const queryClient = new QueryClient();

describe('SideMenu Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  // Test loading state
  test('renders loading state correctly', async () => {
    jest.useFakeTimers();
    (fetchAllKantoPokemon as jest.Mock).mockResolvedValueOnce(new Promise(resolve => setTimeout(resolve, 1000)));

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SideMenu />
        </MemoryRouter>
      </QueryClientProvider>  
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Test error state
  test('renders error state correctly', async () => {
    (fetchAllKantoPokemon as jest.Mock).mockRejectedValueOnce(new Error('fetch error'));

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SideMenu />
        </MemoryRouter>
      </QueryClientProvider>    
    );

    await waitFor(() => {
      expect(screen.getByTestId('side-menu-error-message')).toBeInTheDocument();
    });

  });

  // Test menu items
  test('displays menu items when data is fetched', async () => {
    (fetchAllKantoPokemon as jest.Mock).mockResolvedValueOnce([{ name: 'Pikachu', url: 'pikachu-url' }]);

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SideMenu />
        </MemoryRouter>
      </QueryClientProvider>  
    );

    expect(await screen.findByTestId('menu-item-Pikachu')).toBeInTheDocument();
  });
});
