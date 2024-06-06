import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table'
import { useContext, useMemo} from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/FirebaseProvider';
import { useQuery } from '@tanstack/react-query';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyAddedPet = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const { refetch, data: pets = [] } = useQuery({
        queryKey: ['pets', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pets?email=${user.email}`);
            return res.data
        }
    })

    //delete option
    const handleDelete = (petId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`${import.meta.env.VITE_API_URL}/pet/${petId}`)
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch()
                }
                catch (err) {
                    console.log(err)
                    toast.error(err.message)
                }

            }
        })
    };

    const data = useMemo(() => pets, [pets])

    /**@type import('@tanstack/react-table').columnDef<any>*/
    const columns = [
        {
            header: "#",
            cell: (cell) => cell.row.index + 1
        },
        {
            accessorKey: 'pet_image',
            header: 'Pet Image',
            cell: (cell) => {
                return <img className='h-12 w-12 rounded-full' src={cell.getValue()} />
            }
        },
        {
            id: "pet_name",
            header: 'Pet Name',
            accessorKey: 'pet_name',
        },
        {
            id: "pet_age",
            header: 'Pet Age',
            accessorKey: 'pet_age'
        },
        {
            id: "pet_category",
            header: 'Pet Category',
            accessorKey: 'pet_category'
        },
        {
            accessorKey: 'adopted',
            header: 'Adopted',
            cell: info => (info.getValue() ? 'Adopted' : 'Not Adopted')
        },
        {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => (
                <div className='flex items-center gap-4'>
                    <button>
                        <MdEditSquare className='text-2xl'></MdEditSquare>
                    </button>
                    <button onClick={() => handleDelete(row.original._id)} className="text-red-600 hover:text-red-900">
                        <MdDelete className='text-2xl'></MdDelete>
                    </button>
                    <button className='bg-[#F07C3D] text-white px-2 py-1 font-medium rounded-md'>
                        Adopted
                    </button>
                </div>
            )
        }
    ]

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel()
    });

    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mb-12'>My Added Pet</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className='bg-[#F07C3D] text-white'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {
                                        flexRender(cell.column.columnDef.cell, cell.getContext())
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>



            {/* <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F07C3D]">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Pet Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Adopted</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap"><img src={pet.pet_image} alt={pet.pet_name} className="h-10 w-10 rounded-full" /></td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_age} Years</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.pet_category}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{pet.adopted ? 'Adopted' : 'Not Adopted'}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className='flex items-center gap-4'>
                                    <button >
                                        <MdEditSquare className='text-2xl'></MdEditSquare>
                                    </button>
                                    <button onClick={() => handleDelete(pet._id)} className="text-red-600 hover:text-red-900">
                                        <MdDelete className='text-2xl'></MdDelete>
                                    </button>
                                    <button className='bg-[#F07C3D] text-white px-2 py-1 font-medium rounded-md'>
                                        Adopted
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default MyAddedPet;