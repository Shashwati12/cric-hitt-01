// import { useEffect, useState } from 'react';
// import TournamentCard from '../components/TournamentCard';
// import { useNavigate } from 'react-router-dom';
// import {supabase} from '../config/supabase';
// import HoverDevCards from '../components/HoverDevCards';

// function Registration() {
//     const navigate = useNavigate();
//     const [tournaments, setTournaments] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchTournaments = async () => {
//             try {
//                 const { data, error } = await supabase
//                     .from('Tournaments')
//                     .select('id, tournament_name,organizer,venue,overs')

//                 if (error) {
//                     throw error;
//                 }
//                 setTournaments(data || []);
//             } catch (err) {
//                 setError(err.message);
//             }
//         }
//         fetchTournaments();
//     }, []);

//     function handleNext() {
//         navigate('/createTournamentForm')
//     }

//     return (
//         <div className='bg-black h-[100%] w-[100%] text-white'>
//             <div className='flex justify-end'>
//                 <button className='bg-green-500 px-3 py-2 rounded-[5px]' onClick={handleNext}>Create Tournament</button>
//             </div>

//             <div className=' '>
//                 {error && <p className="error">Error: {error}</p>}
//                 {tournaments.length === 0 ? (
//                     <p>No tournaments found.</p>
//                 ) : (
//                     <div className="cards-container text-black">
//                         {tournaments.map(tournament => (
//                             <TournamentCard key={tournament.id} tournament={tournament} />
//                             // <HoverDevCards key={tournament.id} tournament={tournament}></HoverDevCards>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Registration;





import { useEffect, useState } from 'react';
import TournamentCard from '../components/TournamentCard'; // Assuming this is your existing component
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabase';

function Registration() {
    const navigate = useNavigate();
    const [tournaments, setTournaments] = useState([]);
    const [error, setError] = useState(null);
    const [selectedTournament, setSelectedTournament] = useState(null); // Store selected tournament for modal
    const [showModal, setShowModal] = useState(false); // Modal visibility

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const { data, error } = await supabase
                    .from('Tournaments')
                    .select('id, tournament_name, organizer, venue, overs , prize , tournament_info');

                if (error) {
                    throw error;
                }
                setTournaments(data || []);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchTournaments();
    }, []);

    // Function to handle card click and show modal
    const handleCardClick = (tournament) => {
        setSelectedTournament(tournament); // Set selected tournament
        setShowModal(true); // Show modal
    };

    // Function to close modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedTournament(null);
    };

   
    function handleNext(){
        navigate('/createTournamentForm')
    }
    function handleNext01(){
        navigate('/REform')
    }

    return (
        <div className='bg-gray-900 h-full w-full text-white'>
            <div className='flex justify-end p-4'>
                <button className='bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition' onClick={handleNext}>
                    Create Tournament
                </button>
            </div>

            <div className='container mx-auto'>
                {error && <p className="text-red-500">Error: {error}</p>}
                {tournaments.length === 0 ? (
                    <p className="text-center text-white mt-8">No tournaments found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        {tournaments.map((tournament) => (
                            <div
                                key={tournament.id}
                                className="bg-white text-black rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                                onClick={() => handleCardClick(tournament)}
                            >
                                <h2 className="text-xl font-bold mb-2">{tournament.tournament_name}</h2>
                                <p className="text-gray-700"><strong>Organizer:</strong> {tournament.organizer}</p>
                                <p className="text-gray-700"><strong>Venue:</strong> {tournament.venue}</p>
                                <p className="text-gray-700"><strong>Overs:</strong> {tournament.overs}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal for showing tournament details */}
            {showModal && selectedTournament && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white text-black p-6 rounded-md w-[90%] max-w-md">
                        <h2 className="text-2xl font-bold mb-4">{selectedTournament.tournament_name}</h2>
                        <p><strong>Organizer:</strong> {selectedTournament.organizer}</p>
                        <p><strong>Venue:</strong> {selectedTournament.venue}</p>
                        <p><strong>Overs:</strong> {selectedTournament.overs}</p>
                        <p><strong>Prize Money :</strong>{selectedTournament.prize}</p>
                        <p><strong>Tournamenet Information:</strong>{selectedTournament.tournament_info}</p>

                        <div className='flex justify-center items-center space-x-4'>

                        <button
                                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                            onClick={handleNext01}
                            >
                                Register
                            </button>
                            <button
                                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                            
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Registration;

