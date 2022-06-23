import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const isResponse = useSelector(state => state.Reducer.isResponse);

    const nameHandler = (e) => {
        setName(e.target.value)
    };
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    };
    const emailHandler = (e) => {
        setEmail(e.target.value)
    };
    const countryHandler = (e) => {
        setCountry(e.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();
        const finalData = {
            name,
            email,
            phone,
            country
        }
        dispatch(PostApiAction(finalData));
    }
    if (isResponse) {
        toast("Your Response has been submitted !")
        // navigate("/form")
    }
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={(e) => nameHandler(e)} value={name} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => emailHandler(e)} value={email} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPhone">Phone</label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="Phone" onChange={(e) => phoneHandler(e)} value={phone} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country" onChange={(e) => countryHandler(e)} value={country} />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={(e) => { clickHandler(e) }}>Sign in</button>
            </form>
            <ToastContainer />
        </div >
    )
}

export default Forms