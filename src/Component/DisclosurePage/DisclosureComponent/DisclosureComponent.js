import React, { useState } from "react";
// Token
import useToken from "../../../Hooks/useToken";
// Style
import "./DisclosureComponent.css";
// Format Date
import moment from "moment";
// Pagination
import Pagination from "../../GlobalComponent/pagination/Pagination";

function Disclosure() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Function to handle Pagination value
  const handlePagination = (currentValue) => {
    setCurrentPage(currentValue);
  };

  // Disclosure Data
  const disclosure = useToken(
    "https://data.argaam.com/api/v1.0/json/ir-api/overview/en"
  );
  const disclosureData = disclosure?.discloser;

  // Disclouser Details
  const discloserDetails = useToken(
    "https://data.argaam.com/api/v1/json/ir-widget/disclosures-articles-with-body/en"
  );
  // console.log(discloserDetails);
  console.log(discloserDetails);

  // Function to Display Disclousers Details
  const discloserAccordion = (id) => {
    console.log(discloserDetails[id]);
  };

  return (
    <>
      <div className="disclosures-content container-lg" id="accordionExample">
        {disclosureData?.slice(firstIndex, lastIndex)?.map((newsItem, id) => {
          return (
            <div className="accordion" key={id}>
              <div className="row justify-content-between accordion-item">
                <div className="col-md-2 col-lg-2 col-sm-12 col-12">
                  {moment(newsItem?.publishedOn, "DD-MM-YYYY")?.format(
                    "DD/MM/YYYY"
                  )}
                </div>
                <div className="col-md-9 col-lg-9 col-sm-10 col-10">
                  {newsItem?.title}
                </div>

                <button
                  key={id}
                  className="popup-icon accordion-button  col-md-1 col-lg-1 col-sm-2 col-2 pd-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${id}`}
                  onClick={() => discloserAccordion(id)}
                >
                  <i className="bi bi-arrow-down-circle"></i>
                </button>

                <div
                  id={`collapse${id}`}
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h6> {discloserDetails[id]?.title}</h6>

                    <div className="d-flex justify-content-between">
                      <p className="col-10">
                        {moment(
                          discloserDetails[id]?.publishedOn,
                          "DD-MM-YYYY"
                        )?.format("DD/MM/YYYY")}
                      </p>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: discloserDetails[id]?.body,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Component */}
      <Pagination handlePagination={handlePagination} dataLength={"50"} />
    </>
  );
}

export default Disclosure;
