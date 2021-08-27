import React,{useState} from "react";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import TextField from  './TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './firebase';
import '@firebase/firestore';
import {useHistory} from 'react-router-dom';


const UpdateDetails = (props) => {
    const history = useHistory();
    const  db = firebase.firestore();
    const validate = Yup.object({
        name:Yup.string().required('Name is Required'),
        surname:Yup.string().required('Surname must contain a value'),
        age:Yup.string().required('age is Required'),
        location:Yup.string().required('Please Provide Location'),
        email:Yup.string().email('Invalid Email').required('Email is Mandatory'),


    });
    const updateUser = (id,values) => {
        db.collection('users').doc(id).update({
            name:values.name,
            surname:values.surname,
            age:values.age,
            location:values.location,
            email:values.email
        }).then((res) => {
            alert("User Details"+'\n'+" Successfully Updated")
            history.push('/UserDetails')
        }).catch((err) =>{
            alert("Something went Wrong")
            history.push('/UserDetails')
        })
    }
    const deteleUser = (id) => {
        db.collection('users').doc(id).delete()
            .then( (res) => {
                    alert("Successfully Deleted User")
                    history.push('/UserDetails')
                }
            )
            .catch((err) =>{
                alert(err)
                history.push('/UserDetails')
            })
    }
    return (

        <div className="container mt-1">

            <div className="row">
                <div className="col-sm-5">
                    <Formik
                        validationSchema={validate}
                        initialValues={{
                            name: props.location.user.name,
                            surname:props.location.user.surname,
                            age:props.location.user.age,
                            location:props.location.user.location,
                            email:props.location.user.email,
                            password:'',
                            confirmPassword:'',
                        }}
                        onSubmit={(values, actions) => {
                            updateUser(props.location.user.id,values);

                        }}
                        onReset={(values => {
                            deteleUser(props.location.user.id);
                        })}



                    >
                        {
                            formik => (
                                <div>

                                    <h1 className={'my-4 font-weight-bold-display-4'}>
                                        Update  User Details

                                    </h1>
                                    <Form onSubmit={formik.handleSubmit}>
                                        <TextField label={'Name'} name={'name'} type={'text'} />
                                        <TextField label={'Surname'} name={'surname'} type={'text'}/>
                                        <TextField label={'Location'} name={'location'} type={'text'}/>
                                        <TextField label={'age'} name={'age'} type={'text'}/>
                                        <TextField label={'email'} name={'email'} type={'email'}/>
                                        <TextField label={'Old Password'} name={'Password'} type={'password'} placeholder={'Old Password'}/>
                                        <TextField label={'New Password'} name={'confirmPassword'} type={'password'} placeholder={'New Password'}/>

                                        <button className="btn btn-success mt-3" type="submit" >
                                            Update Details
                                        </button>
                                        <button className="btn btn-danger mt-3 ml-3" type="reset">
                                            Delete User
                                        </button>
                                    </Form>
                                </div>

                            )
                        }

                    </Formik>
                </div>
                <div className="col-sm-7 my-auto">

                    <img className={'img-fluid w-100'} src={'/logo512.png'} alt="logo  "/>


                </div>


            </div>

        </div>
    )
}
export default UpdateDetails;