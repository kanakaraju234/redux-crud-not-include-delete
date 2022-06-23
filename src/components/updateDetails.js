import React, { useEffect, useState } from 'react';
import { UpdateApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import GetDetailsByHooks from "../hooks/getDetailsByHooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const UpdateDetails = () => {

    const { id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");

    const dispatch = useDispatch();
    const isUpdateResponse = useSelector(state => state.Reducer.isUpdateResponse);
    const [detailById] = GetDetailsByHooks(id)

    useEffect(() => {
        const data = () => {
            if (detailById.data) {
                setName(detailById.data.name);
                setEmail(detailById.data.email);
                setPhone(detailById.data.phone);
                setCountry(detailById.data.country);
            }
        };
        data();
    }, [detailById.data])
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
        dispatch(UpdateApiAction(finalData, id));
    }
    if (isUpdateResponse) {
        toast("Your Response has been updated successfully !")

    }

    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={(e) => nameHandler(e)} defaultValue={name} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={(e) => emailHandler(e)} defaultValue={email} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPhone">Phone</label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="Phone" onChange={(e) => phoneHandler(e)} defaultValue={phone} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCountry">Country</label>
                        <input type="text" className="form-control" id="inputCountry" placeholder="Country" onChange={(e) => countryHandler(e)} defaultValue={country} />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={(e) => { clickHandler(e) }}>Update Details</button>
            </form>
            <ToastContainer />
        </div >
    )
}

export default UpdateDetails