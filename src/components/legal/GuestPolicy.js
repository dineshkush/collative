import React from "react";
import "./legal.scss";
import CallToAction from "../main/call-to-action/CallToAction";

const GuestPolicy = () => {
  return (
    <>
      <section className="policy_content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                <br />
              </p>
              <h1>Guest and Visitor Policy</h1>
              <p>
                <br />
              </p>
              <p>
                Below is a set of guidelines applicable to User and its Guest/
                Visitor under the terms of the Membership Agreement.
              </p>
              <p>
                <br />
              </p>
              <ol id="l1">
                <li data-list-text="1.">
                  <p>
                    User shall be free to invite its Guests and Visitors at (“
                    <b>Premises</b>”).
                  </p>
                </li>
                <li data-list-text="2.">
                  <p>
                    Guest shall mean a person who accompanies the User for a
                    continuous duration of 1 hour or more and Visitor shall mean
                    a person who visits the User for duration of 1 hour or less
                    at the Premises.
                  </p>
                </li>
                <li data-list-text="3.">
                  <p>
                    Common Area shall mean the waiting area around the reception
                    excluding the areas dedicated for the use by Users.
                    Dedicated User areas would include Meeting Room/ Lounge,
                    Conference Room, Dedicated and non-Dedicated workstations,
                    Community area etc.
                  </p>
                </li>
                <li data-list-text="4.">
                  <p>
                    Number of person/s permissible as User’s Guest/s shall
                    depend upon the type and plan of booking by the User.
                  </p>
                </li>
                <li data-list-text="5.">
                  <p>
                    User shall be responsible for booking sufficient space to
                    entertain its Guests at the time of booking and the
                    Collative shall not be responsible for providing any
                    additional space beyond the Common Area.
                  </p>
                </li>
                <li data-list-text="6.">
                  <p>
                    Guests will be allowed in Common Area as per availability of
                    space in Common Area subject to discretion of the Collative.
                  </p>
                </li>
                <li data-list-text="7.">
                  <p>
                    If the Guest stays for more than 1 hour without sufficient
                    space being booked by the User, the User shall have to
                    purchase day pass for its Guest.
                  </p>
                </li>
                <li data-list-text="8.">
                  <p>
                    Day Pass shall mean an amount equivalent to the fee for
                    booking a Daily Flexi Seating plan or the equivalent fee for
                    booking a Meeting Room/ Conference Room subject to
                    availability of and at the sole discretion of the Collative.
                  </p>
                </li>
                <li data-list-text="9.">
                  <p>
                    In the event of Sufficient Space being not booked by User
                    and sufficient space being also not available for the
                    purpose of Day Pass, the Guest shall not be allowed to stay
                    at for more than 1 hour.
                  </p>
                </li>
                <li data-list-text="10.">
                  <p>
                    Guests and Visitors are required to adhere to the terms and
                    conditions of the Membership Agreement entered into by the
                    relevant User.
                  </p>
                </li>
                <li data-list-text="11.">
                  <p>
                    User shall ensure that its Guests and Visitors carry valid
                    Identity Proof with them failing which they shall be denied
                    access to the Premises.
                  </p>
                </li>
                <li data-list-text="12.">
                  <p>
                    User shall be solely responsible for the actions and
                    behaviour of its Guests and Visitors during their visit at
                    the Premises.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default GuestPolicy;
