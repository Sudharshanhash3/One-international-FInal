 <div class="modal-content" style="padding-top: 50px;">
                    <div class="modal-header pt-60" style="display: flex; justify-content: center;align-items: center;flex-direction: column; border: none;">
                        <h3 class="modal-title" id="exampleModalLabel">Request a <span style="color:#e6af2e ;">Quote</span></h3>
                        <p> We Produce great ideas and Build New World</p>
                        <button type="button" style="position: absolute; right:0;margin:0; top: 0;" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="pl-20 pr-20">
                        <form>
                            <div class="form-row ">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Your name">
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Your Company name">
                                </div>
                            </div>
                            <div class="form-row mt-20">
                                <div class="col">
                                    <input type="email" class="form-control" placeholder="Email ID">
                                </div>
                                <div class="col">
                                    <input type="tel" class="form-control" placeholder="phone Number">
                                </div>
                            </div>
                            <div class="form-row  mt-20">
                                <div class="col">
                                    <select id="country" class="form-control" onclick="load_list();this.onclick=null">
                                            <option value="" disabled selected>Select your Country</option>
                                          </select>
                                </div>

                                <!-- <div class="col">
                                        <select id="servicelist" class="form-control" onclick="load_services();this.onclick=null">
                                            <option value="" disabled selected> Select Service </option>
                                            
                                          </select>
                                    </div> -->
                                <div class="col">
                                    <div class="dropdown" onclick="load_services();this.onclick=null">
                                        <button class="btn btn-block dropdown-toggle btn-outline-dark text-left " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              Select Service
                                            </button>
                                        <div class="dropdown-menu getdropdown" id="servicelist" aria-labelledby="dropdownMenuButton">

                                        </div>
                                    </div>
                                </div>








                            </div>
                            <div class="form-row  mt-20">
                                <div class="col">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Enter Details"></textarea>
                                </div>

                            </div>

                            <div style="width: 100%; " class="text-center">
                                <button type="submit" class="mainbt mt-30">Send</button>
                            </div>
                        </form>
                    </div>



                </div>
                <div class="modal-footer text-center" style="display: flex;justify-content: center;border: none">
                </div>
            </div>
       
       