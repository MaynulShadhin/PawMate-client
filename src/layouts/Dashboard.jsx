import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);
    return (
        <div>
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
                                        <Sidebar.ItemGroup>
                                            <NavLink to="/dashboard/addPet">
                                                <Sidebar.Item>
                                                    Add A pet
                                                </Sidebar.Item>
                                            </NavLink>
                                            <NavLink>
                                                <Sidebar.Item>
                                                    My Added pets
                                                </Sidebar.Item>
                                            </NavLink>
                                            <NavLink>
                                                <Sidebar.Item>
                                                    Adoption Request
                                                </Sidebar.Item>
                                            </NavLink>
                                            <NavLink>
                                                <Sidebar.Item>
                                                    Create Donation Campaign
                                                </Sidebar.Item>
                                            </NavLink>
                                            <NavLink>
                                                <Sidebar.Item>
                                                    My Donation Campaigns
                                                </Sidebar.Item>
                                            </NavLink>
                                            <NavLink>
                                                <Sidebar.Item>
                                                    My Donations
                                                </Sidebar.Item>
                                            </NavLink>
                                        </Sidebar.ItemGroup>
                                        <Sidebar.ItemGroup>
                                            <NavLink to="/">
                                                <Sidebar.Item>
                                                    Home
                                                </Sidebar.Item>
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
