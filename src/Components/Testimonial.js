import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Testimonial() {

    const [name, setName] = useState("");
    const [postBy, setPostBy] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [id, setId] = useState();
    
    const [testimonialArray, setTestimonialArray] = useState([]);

    useEffect(() => {
        getTestimonials()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            id: uuidv4(),
            name: name,
            postBy: postBy,
            description: description,
            photo: photo

        }

        //document.getElementById('testimonialModal').modal('hide');
       postTestimonial(obj)

    }

    const postTestimonial = async (obj) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await Axios.post('https://firstprinciples-backend.herokuapp.com/api/create-testimonial', obj, config);
            toast.success('added testimonial succesfully')
            const arr = [...testimonialArray ,response.data.data];
            setTestimonialArray(arr)
            setName("");
            setPhoto("");
            setDescription("");
            setPostBy("");

        } catch(err) {
            toast.error('error while adding testimonial')
        }

    }

    const getTestimonials = async () =>{
        try {
            const response = await Axios.get("https://firstprinciples-backend.herokuapp.com/api/getTestimonials")
            
            const arr = response.data.data
            setTestimonialArray(arr)
        } catch(err) {
            toast.error("Unable to get testimonials")
        }
    }

    const deleteTestimonial = async (id) => {
        try {
            const response = await Axios.put(`https://firstprinciples-backend.herokuapp.com/api/delete-testimonial/${id}`);
            const newArr = testimonialArray.filter(item => item._id !== response.data.data._id)
            setTestimonialArray(newArr)
            toast.success("Succesfully deleted a testimonial")
        } catch(err) {
            toast.error("Unable to delete a testimonial")
        }
    }

    const setItemData = (e, item) => {
        setName(item.name);
        setId(item._id);
        setPostBy(item.postBy);
        setDescription(item.description)
    }

    const clearItemData = (e) => {
        setName("");
        setId("");
        setPostBy("");
        setDescription("");
        setPhoto("");
    }

    const updateTestimonial = async (e) => {
        e.preventDefault()
        try {
            const obj = {
                name: name,
                postBy: postBy,
                description: description,
            }
            const response = await Axios.put(`https://firstprinciples-backend.herokuapp.com/api/update-testimonial/${id}`, obj);
            const newArr = testimonialArray.filter(item => item._id !== response.data.data._id)
            newArr.push(response.data.data)
            setTestimonialArray(newArr)
            toast.success("Succesfully updated a testimonial")
        } catch(err) {
            toast.error("Unable to update a testimonial")
        }
    }


    const testimonialDiv = testimonialArray.filter(it => it.active === 1).map(item => {
            return (
                <div className="col-lg-4" id={item.id}>
                    <div className="single-testimonial mt-30 mb-30 text-center" style={{cursor: "pointer"}}>
                        <div className="edit-del-buttons">
                            <div className="edit-btn" data-bs-toggle="modal" data-bs-target="#updateModal" onClick={(e) => setItemData(e, item)}>Edit</div>
                            <div className="del-btn" onClick={() => deleteTestimonial(item._id)} >Del</div>
                        </div>
                        <div className="testimonial-image">
                            <img src="assets/images/author-3.jpg" alt="Author" />
                        </div>
                        <div className="testimonial-content">
                            <p className="text">{item.description}</p>
                            <h6 className="author-name">{item.name}</h6>
                            <span className="sub-title">{item.postBy}</span>
                        </div>
                    </div> 
                </div>
            )
    })

    return (
        <>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        <section id="testimonial" className="testimonial-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center pb-10">
                            <h4 className="title">Testimonial</h4>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#testimonialModal" onClick={clearItemData}>
                                Add Testimonial
                            </button>
                            <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row testimonial-active">
                            {testimonialArray.length && testimonialDiv}
                            
                        </div> 
                    </div>
                </div> 
            </div> 
        </section>

        <div className="modal fade" id="testimonialModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Testimonial</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="modal-body">
                    <div className="mb-3">
                        <label for="testimonial-photo" className="col-sm-2 col-form-label">Photo</label>
                        <input className="col-sm-10" type="file" id="testimonial-photo" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Name" aria-label="Name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Posted By" aria-label="PostedBy"  value={postBy} onChange={(e) => setPostBy(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="mt-3 form-floating">
                        <textarea className="form-control" placeholder="please write your comments" id="testimonial-textarea"  value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                        <label for="testimonial-textarea">Description</label>
                    </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
            </form>
            </div>
        </div>
        </div>

        <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Testimonial</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={updateTestimonial}>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Name" aria-label="Name"  value={name} onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Posted By" aria-label="PostedBy"  value={postBy} onChange={(e) => setPostBy(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="mt-3 form-floating">
                                <textarea className="form-control" placeholder="please write your comments" id="testimonial-textarea"  value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                                <label for="testimonial-textarea">Description</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonial
