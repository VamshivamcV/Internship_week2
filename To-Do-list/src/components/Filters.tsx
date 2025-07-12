interface FilterProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export default function Filters({filter, setFilter}: FilterProps){
    const filters = ['all' , 'active' , 'completed'] as const;

    return (
        <div className="flex justfiy-center gap-4 mb-4">
            {filters.map( f => (
                <button key={f} onClick={()=> setFilter(f)} className={`px-3 py-1 rounded ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>
    );
}