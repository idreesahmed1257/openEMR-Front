import "../../materialize/css/materialize.css";
import M from "materialize-css";
import "../../css/idrees.css";
import "../../css/popup.css";
import React, { useState, useEffect } from "react";

const AddPatients2 = () => {
  useEffect(function () {
    var elem = document.querySelector(".collapsible.expandable");
    var instance = M.Collapsible.init(elem, {
      accordion: false,
    });
    M.AutoInit();
  }, []);

  const [PrevName, setPrevName] = useState([]);
  // var PrevName = [''];
  const handleSubmit = (event) => {
    event.preventDefault();

    // PrevName.push();
    let val = event.target.firstName.value + "\n";
    setPrevName([val]); // accessing directly
    // const ageInput = event.target.elements.age; // accessing via `form.elements`

    console.log(PrevName, "Hello"); // output: 'foo@bar.com'
    // console.log(ageInput.value, 'assasasasasa'); // output: '18'
  };
  return (
    <div className="row">
      <div className="col s2"></div>

      <div className="addPatientWrapper col s8">
        <div>
          <h5>Search or Add Patient</h5>
          <div>
            <ul class="collapsible expandable ">
              <li data-collapsible="expandable" class="expandable ">
                <div class="collapsible-header">Who</div>
                <div class="collapsible-body">
                  <div className="d-flex f-column gap-1">
                    {/* 1 */}
                    <div className="d-flex align-center ">
                      <label>Title:</label>
                      <select class="browser-default ">
                        <option value="" disabled selected>
                          Choose your option
                        </option>
                        <option value="4">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                    {/* 2 */}
                    <div className="d-flex align-center ">
                      <label>Name:</label>
                      <div className="d-flex con-between gap-2 ">
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                      </div>
                    </div>
                    {/* 3 */}
                    <div className="d-flex align-center gap-4">
                      <div className="d-flex align-center  col-6">
                        <label>External ID:</label>
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                      </div>
                      <div className="d-flex align-center col-6">
                        <label>DOB:</label>
                        <input type="date" class="datepicker m-0 p-0"></input>
                      </div>
                    </div>
                    {/* 4 */}
                    <div className="d-flex align-center gap-4">
                      <div className="d-flex align-center  col-6">
                        <label>Sex:</label>
                        <select class="browser-default ">
                          <option value="" disabled selected>
                            Choose your option
                          </option>
                          <option value="4">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                      <div className="d-flex align-center col-6">
                        <label>S.S:</label>
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                      </div>
                    </div>
                    {/* 5 */}
                    <div className="d-flex align-center ">
                      <label>User Defined:</label>
                      <div className="d-flex con-between gap-2 ">
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                      </div>
                    </div>
                    {/* 6 */}
                    <div className="d-flex align-center ">
                      <label>Billing Note:</label>
                      <input
                        id="text"
                        type="text"
                        class="browser-default Forminput"
                        style={{ width: "30vw" }}
                      />
                    </div>
                    {/* 7 */}
                    <div className="d-flex align-center gap-4">
                      <div className="d-flex align-center  col-6">
                        <label>Gender Identity:</label>
                        <select class="browser-default ">
                          <option value="" disabled selected>
                            Choose your option
                          </option>
                          <option value="4">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                      <div className="d-flex align-center col-6">
                        <label style={{ width: "10vw" }}>
                          Sexual Orientation:
                        </label>
                        <select class="browser-default ">
                          <option value="" disabled selected>
                            Choose your option
                          </option>
                          <option value="4">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </div>

                    {/* 8 */}
                    <div className="d-flex align-center ">
                      <label>Birth Name:</label>
                      <div className="d-flex con-between gap-2 ">
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                        <input
                          id="text"
                          type="text"
                          class="browser-default Forminput"
                        />
                      </div>
                    </div>
                    {/* 9 */}
                    <div className="d-flex align-center ">
                      <label>Previous Names:</label>
                      <div className="d-flex con-betweken gap-3 align-center">
                        <textarea
                          id="textarea1"
                          className="browser-default"
                          cols={60}
                          rows={7}
                        ></textarea>
                        {/* ///// */}
                        <div class="box">
                          <a class="btn blue-btn blue darken-1" href="#popup1">
                            Add
                          </a>
                        </div>

                        <div id="popup1" class="overlay">
                          <div class="popup d-flex con-center">
                            <a class="close" href="#">
                              &times;
                            </a>
                            <div class="content">
                              <p className="text-center">
                                Patient previous names history. Ensure to add
                                the date the name was last used if known.
                              </p>
                              <div>
                                <form
                                  className="d-flex f-column gap-2"
                                  onSubmit={handleSubmit}
                                  method="get"
                                >
                                  <div className="d-flex f-column">
                                    <label>Title</label>
                                    <input
                                      id="text"
                                      type="text"
                                      name="title"
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex f-column">
                                    <label>First name</label>
                                    <input
                                      id="text"
                                      type="text"
                                      name="firstName"
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex f-column">
                                    <label>Middle name</label>
                                    <input
                                      id="text"
                                      type="text"
                                      name="midName"
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex f-column">
                                    <label>Last name</label>
                                    <input
                                      id="text"
                                      type="text"
                                      name="lastName"
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex f-column">
                                    <label>Suffix</label>
                                    <input
                                      id="text"
                                      type="text"
                                      name="suffix"
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex f-column">
                                    <label>End Date</label>
                                    <input
                                      id="text"
                                      type="date"
                                      name="endDate"
                                      style={{ width: "100%" }}
                                      class="browser-default Forminput"
                                    />
                                  </div>
                                  <div className="d-flex gap-2 con-center ">
                                    <button
                                      type="submit"
                                      className="btn blue lighten-2"
                                    >
                                      Save
                                    </button>
                                    <a className="btn red" href="#">
                                      Cancle
                                    </a>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* //////// */}
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </li>
              <li data-collapsible="expandable" class="expandable ">
                <div class="collapsible-header">Contact</div>

                <div class="collapsible-body">
                  <div className="col-12 d-flex gap-3">
                    <div className="col-6">
                      <div className="d-flex f-column gap-2">
                        {/* 1 */}
                        <div className="d-flex align-center con-between">
                          <label>Address:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="d-flex align-center con-between">
                          <label>City:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="d-flex align-center con-between">
                          <label>Postal Code:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 4 */}
                        <div className="d-flex align-center con-between">
                          <label>Mother`s Name:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 5 */}
                        <div className="d-flex align-center con-between">
                          <label>Emergency Phone:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 6 */}
                        <div className="d-flex align-center con-between">
                          <label>Work Phone:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 7 */}
                        <div className="d-flex align-center con-between">
                          <label>Contact Email:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="email"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 8 */}
                        <div className="d-flex align-center con-between">
                          <label>Contact Email:</label>
                          <div className="d-flex con-between gap-2 ">
                            <select class="browser-default ">
                              <option value="" disabled selected>
                                Choose your option
                              </option>
                              <option value="4">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex f-column gap-2">
                        {/* 1 */}
                        <div className="d-flex align-center con-between">
                          <label>Address Line 2:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="d-flex align-center con-between">
                          <label>State:</label>
                          <div className="d-flex con-between gap-2 ">
                            <select class="browser-default ">
                              <option value="" disabled selected>
                                Choose your option
                              </option>
                              <option value="4">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="d-flex align-center con-between">
                          <label>Country:</label>
                          <div className="d-flex con-between gap-2 ">
                            <select class="browser-default ">
                              <option value="" disabled selected>
                                Choose your option
                              </option>
                              <option value="4">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>{" "}
                          </div>
                        </div>
                        {/* 4 */}
                        <div className="d-flex align-center con-between">
                          <label>Emergency Contact:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 5 */}
                        <div className="d-flex align-center con-between">
                          <label>Home Phone:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 6 */}
                        <div className="d-flex align-center con-between">
                          <label>Mobile Phone:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="text"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 7 */}
                        <div className="d-flex align-center con-between">
                          <label>Trusted Email:</label>
                          <div className="d-flex con-between gap-2 ">
                            <input
                              id="email"
                              type="text"
                              class="browser-default Forminput"
                            />
                          </div>
                        </div>
                        {/* 8 */}
                        <div className="d-flex align-center con-between">
                          <label>Contact Email:</label>
                          <div className="d-flex con-between gap-2 ">
                            <select class="browser-default ">
                              <option value="" disabled selected>
                                Choose your option
                              </option>
                              <option value="4">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="expandable ">
                <div class="collapsible-header">Third</div>
                <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col s2"></div>
    </div>
  );
};

export default AddPatients2;

export default AddPatients2