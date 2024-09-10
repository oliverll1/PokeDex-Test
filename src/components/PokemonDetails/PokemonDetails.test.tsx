import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails';
import { fetchPokemonDetail } from '../../fetchers/getPokemon';
import { mockGetPokemon } from '../../__mocks__/getPokemon';

jest.mock('../../fetchers/getPokemon', () => ({
  fetchPokemonDetail: jest.fn(),
}));

jest.mock('../../assets/vector/bug.svg', () => 'mocked-svg');

const queryClient = new QueryClient();

describe('PokemonDetails Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
        queryClient.clear();
    });

    // Test loading state
    test('renders loading state correctly', () => {
        jest.useFakeTimers();
        (fetchPokemonDetail as jest.Mock).mockImplementation(() => new Promise(resolve => setTimeout(resolve, 1000)));
        
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/pokemon/1']}>
                    <Routes>
                        <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.getByTestId('pokemon-details-loading')).toBeInTheDocument();
    });

    // Test error state
    test('renders error state correctly', async () => {
        (fetchPokemonDetail as jest.Mock).mockRejectedValueOnce(new Error('fetch error'));
        
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/pokemon/1']}>
                    <Routes>
                        <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        await waitFor(() => expect(screen.getByTestId('pokemon-details-error')).toBeInTheDocument(), { timeout: 1000 });
    });

    // Test success state
    test('renders pokemon details correctly', async () => {
        (fetchPokemonDetail as jest.Mock).mockResolvedValueOnce(mockGetPokemon);

        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={['/pokemon/1']}>
                    <Routes>
                        <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    </Routes>
                </MemoryRouter>
            </QueryClientProvider>
        );

        await waitFor(() => expect(screen.getByTestId('pokemon-details')).toBeInTheDocument(), { timeout: 1000 });

        expect(screen.getByTestId('pokemon-name')).toHaveTextContent('bulbasaur');
        expect(screen.getByTestId('pokemon-id')).toHaveTextContent('#001');
        expect(screen.getByTestId('pokemon-weight')).toHaveTextContent('6.9 kg');
        expect(screen.getByTestId('pokemon-height')).toHaveTextContent('0.7 m');
        expect(screen.getByTestId('pokemon-species')).toHaveTextContent('bulbasaur');
        expect(screen.getByTestId('pokemon-ability')).toHaveTextContent('overgrow');
    });
});
