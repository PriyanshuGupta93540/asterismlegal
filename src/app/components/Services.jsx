import React from "react";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ApartmentIcon from '@mui/icons-material/Apartment';


 const ServiceCard = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 mt-8 serv">
  <div class=" px-4 mx-auto max-w-screen-xl sm:py-12 lg:px-6 serv-container">
  <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center serv-our">
             
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] serv-head">
                Our Services
              </h2>
              <p className="text-base text-body-color serv-p">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div> 
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <AccountBalanceIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Bankruptcy & Insolvency Law</h3>
              <p class="text-gray-300 ">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <AccountBalanceWalletIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Banking Law</h3>
              <p className="text-gray-300 ">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <CorporateFareIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Commercial & Corporate Law</h3>
              <p class="text-gray-300 ">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                 <OtherHousesIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Civil Law</h3>
              <p className="text-gray-300 ">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
          </div>
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <PeopleAltIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Consumer Law</h3>
              <p className="text-gray-300 ">Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.</p>
          </div>
          <div className="qual text-white p-6 rounded-2xl">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <ApartmentIcon className="w-8 h-8 text-yellow-500"/>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Companies Law</h3>
              <p className="text-gray-300 ">Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.</p>
          </div>
      </div>
  </div>
</section>
    </>
  );
};

export default ServiceCard
