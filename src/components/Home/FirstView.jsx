import React from "react";
import AccountingIcon from '../../assets/Accounting.svg'
import TaxIcon from '../../assets/tax.svg'
import AuditingIcon from '../../assets/Auditing.svg'
import IcvIcon from '../../assets/ICV.svg'
function FirstView() {
  return (
    <div className="pt-5 col-span-3 md:col-span-2">
      <div className="container-md flex flex-wrap justify-center">
        <div className="px-10 py-20 m-5 text-white bg-white bg-opacity-5">
          <div className="mb-10">
          <h4 className="py-3 font-medium text-lg md:text-xl border-b-2 border-green-400">
            Get Tax, Accounting & Auditing Services in Dubai
          </h4>
          <h1 className="py-5 text-2xl md:text-6xl font-bold">
            Looking for a Business Consulting firm in Dubai?
          </h1>

          <h3 className="text-secondary text-xl font-medium">
            Bestax... Calculating The Best Opportunities For You For 19+ Years
          </h3>

          <p>
            Unlock your business's potential with Bestax Chartered Accountants,
            a renowned consultancy firm with strong presence in Canada and the
            UAE. Our industry-leading response times and exceptional customer
            service testify to our dedication to creating a seamless and
            stress-free experience. Elevate your financial success by partnering
            with Bestax today!
          </p>
          </div>
          <div className="grid grid-cols-4">
            <div className="grid grid-cols-4 col-span-2 m-3 bg-secondary bg-opacity-30 border-2 border-white">
              <img src={AccountingIcon} alt="" className="h-12 p-2 m-3 col-span-1"/>
              <h4 className="col-span-3 text-center p-2 m-3">Accounting Services</h4>
            </div>
            <div className="grid grid-cols-4 col-span-2 m-3 bg-secondary bg-opacity-30 border-2 border-white">
              <img src={TaxIcon} alt="" className="h-12 p-2 m-3 col-span-1"/>
              <h4 className="col-span-3 text-center p-2 m-3">Tax Services</h4>
            </div>
            <div className="grid grid-cols-4 col-span-2 m-3 bg-secondary bg-opacity-30 border-2 border-white">
              <img src={AuditingIcon} alt="" className="h-12 p-2 m-3 col-span-1"/>
              <h4 className="col-span-3 text-center p-2 m-3">Auditing Services</h4>
            </div>
            <div className="grid grid-cols-4 col-span-2 m-3 bg-secondary bg-opacity-30 border-2 border-white">
              <img src={IcvIcon} alt="" className="h-12 p-2 m-3 col-span-1"/>
              <h4 className="col-span-3 text-center p-2 m-3">ICV Services</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstView;
