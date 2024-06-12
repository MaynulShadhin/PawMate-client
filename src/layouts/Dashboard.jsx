import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

    const [isAdmin] = useAdmin();

    return (
        <div className="bg-white dark:bg-slate-800">
            <div>
                <div>
                    <Button onClick={() => setIsOpen(true)}><FaAlignLeft></FaAlignLeft></Button>
                </div>
                <Drawer open={isOpen} onClose={handleClose}>
                    <Drawer.Header title="MENU" titleIcon={() => <></>} />
                    <Drawer.Items>
                        <Sidebar
                            aria-label="Sidebar with multi-level dropdown example"
                            className="[&>div]:bg-transparent [&>div]:p-0"
                        >
                            <div className="flex h-full flex-col justify-between py-2">
                                <div>
                                    <Sidebar.Items>
                                        {
                                            isAdmin ? <>
                                                <Sidebar.ItemGroup>
                                                    {/* admin routes */}
                                                    <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Users
                                                    </NavLink>
                                                    <NavLink to="/dashboard/allPets" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        All Pets
                                                    </NavLink>
                                                    <NavLink to="/dashboard/allDonations" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        All Donations
                                                    </NavLink>
                                                    {/* all routes */}
                                                    <NavLink to="/dashboard/addPet" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Add A pet
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myPets" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Added pets
                                                    </NavLink>
                                                    <NavLink to="/dashboard/adoptionRequests" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Adoption Request
                                                    </NavLink>
                                                    <NavLink to="/dashboard/createCampaign" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Create Donation Campaign
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myCampaigns" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Donation Campaigns
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myDonations" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Donations
                                                    </NavLink>
                                                </Sidebar.ItemGroup>
                                            </> : <>
                                                <Sidebar.ItemGroup>
                                                    <NavLink to="/dashboard/addPet" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Add A pet
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myPets" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Added pets
                                                    </NavLink>
                                                    <NavLink to="/dashboard/adoptionRequests" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Adoption Request
                                                    </NavLink>
                                                    <NavLink to="/dashboard/createCampaign" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        Create Donation Campaign
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myCampaigns" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Donation Campaigns
                                                    </NavLink>
                                                    <NavLink to="/dashboard/myDonations" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D] block" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D] block"}>
                                                        My Donations
                                                    </NavLink>
                                                </Sidebar.ItemGroup>
                                            </>
                                        }
                                        {/* shared nav links */}
                                        <Sidebar.ItemGroup>
                                            <NavLink to="/" className={({ isActive }) => isActive ? "text-lg mr-4 font-semi-bold border-b-2 border-[#F07C3D] text-[#F07C3D]" : "text-lg mr-4 font-semi-bold text-gray-700 hover:text-[#F07C3D]"}>
                                                Home
                                            </NavLink>
                                        </Sidebar.ItemGroup>
                                    </Sidebar.Items>
                                </div>
                            </div>
                        </Sidebar>
                    </Drawer.Items>
                </Drawer>
            </div>
            <div className="mx-auto container">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
