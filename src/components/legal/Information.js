import React from "react";
import "./legal.scss";
import CallToAction from "../main/call-to-action/CallToAction";

const Information = () => {
  return (
    <>
      <section className="policy_content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Information Security Policy</h1>
              <h3>1.1 Purpose</h3>
              <br />
              <p>
                The purpose of this Information Security Policy is to protect
                the Collative’s employees, assets, customer information,
                integrity and reputation from potential security threats.
                Security threats can include compromise of confidentiality
                (people obtaining or disclosing information inappropriately),
                integrity (information being altered or erroneously validated,
                whether deliberate or accidental) and availability (information
                not being available when it is required).
              </p>
              <br />
              <h3>1.2 Scope</h3>
              <br />
              <ul id="l6">
                <li data-list-text="o">
                  <span class="p">
                    This policy is applicable to all staff of the Collative and
                    third parties who interact with the information held by the
                    Collative and the assets used to store and process the
                    information.
                  </span>
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    All of the Collative’s staff are expected to follow a code
                    of conduct and company policies and procedures.
                  </span>{" "}
                  <br />
                  <br />
                </li>
              </ul>
              <br />

              <h3>1.3 Information Security Objectives</h3>
              <br />
              <p>Main objectives of the policy are to ensure that –</p>
              <ul id="l6">
                <li data-list-text="o">
                  <span class="p">
                    Information/information systems are available only to
                    authorized users as per the business needs and information
                    systems are used in an effective and efficient manner
                    adhering to the Terms of Use policy.
                  </span>
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Information assets including data, computer systems,
                    intellectual property and IT equipment are adequately
                    protected from damage, loss, inappropriate alteration and
                    unauthorized use or access.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    To provide guidance and direction to our employees for the
                    protection of the organization’s information systems against
                    accidental/deliberate damage or destruction.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Compliance of all regulatory and statutory requirements
                    pertaining to information technology and collecting,
                    processing, transmission, storage and disclosure of data.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Creation of awareness on information security within the
                    company as a part of the daily operations and to ensure that
                    all employees understand their responsibilities for
                    maintaining information security.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Creation of detailed information security standards and
                    procedures and ensuring compliance against such standards
                    and procedures.
                  </span>{" "}
                  <br />
                  <br />
                </li>
              </ul>
              <br />

              <h3>1.4 Policy Statement</h3>
              <br />
              <ul id="l6">
                <li data-list-text="o">
                  <span class="p">
                    The IT security should identify the security risks and their
                    relative priorities, responding to them promptly and
                    implementing safeguards that are appropriate, effective,
                    culturally acceptable and practical.
                  </span>
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    All information (including third party information) should
                    be protected by security controls and handling procedures
                    appropriate to its sensitivity and criticality.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Compliance with the policy will be monitored on a regular
                    basis.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Security measures should be reviewed periodically in order
                    to protect the business.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Information assets should be protected and managed in order
                    to meet the contractual, legislative, privacy and ethical
                    responsibilities.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    The information assets of third parties should be protected
                    whether such protection is required contractually, legally
                    or ethically.
                  </span>{" "}
                  <br />
                  <br />
                </li>
                <li data-list-text="o">
                  <span class="p">
                    Any sensitive personal data or information shall be
                    collected in strict adherence to the Information Technology
                    Act, 2000.
                  </span>{" "}
                  <br />
                  <br />
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Information;
