import { useFormik } from "formik";
import * as Yup from "yup";
import Title from "../Title/Title";
import { useState } from "react";

const titles = ["Name", "Email", "Phone"];
const type = ["text", "email", "tel"];



export default function ContactUs() {
    const [Mes, setMes] = useState(null)

    async function sendValuesToApi(values) {
        try {
            const res = await fetch(`http://upskilling-egypt.com:3001/contact`, {
                body: JSON.stringify(values),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setMes(data.message)
        } catch (error) {
            console.log(error);
        }
    }





    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Name must be at least 3 characters").max(12, "Name cannot exceed 12 characters").required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string()
            .matches(/01[0125][0-9]{8}/, "Phone number is not valid")
            .required("Phone number is required")
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: ""
        },
        validationSchema,
        onSubmit: (values) => {
            sendValuesToApi(values)
        },
    });

    return (
        <div className="bg-white pb-10">
            <Title title={"Contact Us"} />

            <div className="flex flex-wrap justify-center gap-x-28 gap-y-6 lg:me-20 items-center ">
                <form onSubmit={formik.handleSubmit} className="inputs flex flex-col gap-y-4  ">
                    {[...Array(3)].map((_, index) => (
                        <div key={index}>
                            <input
                                type={`${type[index]}`}
                                placeholder={`${titles[index]}`}
                                required
                                className='rounded-full h-[56px] w-[250px] sm:w-[374px] outline-blue-500 p-4 bg-[#CEDCFF]'
                                name={titles[index].toLowerCase()}
                                value={formik.values[titles[index].toLowerCase()]}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched[titles[index].toLowerCase()] && formik.errors[titles[index].toLowerCase()] ? (
                                <div className="text-red-500">{formik.errors[titles[index].toLowerCase()]}</div>
                            ) : null}
                        </div>
                    ))}
                    <span className="mx-auto"> {!Mes ? <button disabled={!(formik.isValid && formik.dirty)} className={`${!(formik.isValid && formik.dirty) ? "disabled:cursor-no-drop " : ""}  border-[3px] duration-150 border-[#5180F6] h-[56px] w-[168px]  rounded-full`} type="submit">Send</button>
                        : ""}
                    </span>
                    <p className="mx-auto text-green-500">{Mes ? <span>  <i className="font-bold fa-solid fa-check"></i> {Mes}</span> : ""} </p>
                </form>

                <div className="ContactUs mt-8 h-[186px] flex flex-col gap-y-9">
                    <p><i className="text-[#5180F6] me-5 fa-solid fa-envelope"></i>upskilling.eg1@gmail.com</p>
                    <p><i className="text-[#5180F6] me-5 fa-solid fa-phone"></i>+20 115 493 2137</p>
                </div>
            </div>
        </div>
    );
}
