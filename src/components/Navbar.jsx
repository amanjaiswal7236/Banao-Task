import React, { useState } from 'react';
import logo from '../assets/whole.svg';
import Modal from './Modal';
import sign from '../assets/atg_illustration.png';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign Up and Sign In
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Implement form submission logic here
  };

  return (
    <nav className="bg-white shadow w-full h-[px]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <img src={logo} alt="ATG World Logo" className="w-[162.57px] h-[24px]" />
        </div>
        <div className="flex items-center flex-grow justify-center">
          <div className="relative w-[360px] h-[42px] max-w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fas fa-search text-gray-500"></i>
            </div>
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="border rounded-full py-2 pl-10 pr-4 w-full h-full bg-[#F2F2F2] focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="py-2 px-4 rounded-md"
            onClick={handleOpenModal}
          >
            Create account. <span className="text-blue-500 font-bold">It’s free!</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="h-auto relative rounded-lg bg-white p-6 w-[600px] max-w-lg md:max-w-xl lg:max-w-2xl">
          <button
            className="absolute top-4 right-4 cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handleCloseModal}
          >
            <span className="text-gray-600">×</span>
          </button>
          <div className="flex flex-col md:flex-row items-start justify-start py-0 px-4 md:px-9 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-full md:min-w-[208px]">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                <h2 className="m-0 text-[24px] font-bold text-black z-[1]">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>
              </div>
              <form className="self-stretch flex flex-col items-start justify-start" onSubmit={handleSubmit}>
                {isSignUp && (
                  <div className="flex w-full gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="h-[46px] w-full bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3 rounded-t-md"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="h-[46px] w-full bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3 rounded-t-md"
                    />
                  </div>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-[46px] w-full bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3 mt-2 rounded-md"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-[46px] w-full bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3 mt-2 rounded-md"
                />
                {isSignUp && (
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-[46px] w-full bg-gray-100 border-[1px] border-solid border-gainsboro-400 px-3 mt-2 rounded-md"
                  />
                )}
                <button className="cursor-pointer py-2.5 px-6 bg-blue-500 rounded-3xl mt-4 w-full flex items-center justify-center">
                  <div className="relative text-sm font-semibold text-white z-[1]">
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </div>
                </button>
              </form>
              <button
                type="button"
                className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-md flex flex-row items-center justify-start gap-[10px] mt-4 border border-solid border-gainsboro-500 hover:bg-gainsboro-100"
                onClick={() => console.log(isSignUp ? 'Sign up with Facebook' : 'Sign in with Facebook')}
              >
                <i className="fa-brands fa-facebook"></i>
                <div className="relative text-sm text-black z-[1]">
                  {isSignUp ? 'Sign up with Facebook' : 'Sign in with Facebook'}
                </div>
              </button>
              <button
                type="button"
                className="cursor-pointer py-2.5 pr-5 pl-[21px] bg-white self-stretch rounded-md flex flex-row items-center justify-start gap-[10px] mt-2 border border-solid border-gainsboro-500 hover:bg-gainsboro-100"
                onClick={() => console.log(isSignUp ? 'Sign up with Google' : 'Sign in with Google')}
              >
                <i className="fa-brands fa-google"></i>
                <div className="relative text-sm text-black z-[1]">
                  {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
                </div>
              </button>
            </div>
            <div className="md:flex flex-1 flex-col items-end justify-start gap-4 min-w-[208px] mt-4 md:mt-0">
              <div className="relative text-sm text-right z-[1]">
                <span className="text-darkslategray-100">
                  {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                </span>
                <span
                  className="font-semibold text-blue-500 cursor-pointer"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Create Account'}
                </span>
              </div>
              <div className="hidden md:flex self-stretch h-[348px] flex-col items-end justify-start gap-[12px]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt={isSignUp ? 'Sign up illustration' : 'Sign in illustration'}
                  src={sign}
                />
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
