import Cookies from "js-cookie";

import Url from '../../url/Allurl';

// Retrieve the data from LocalStorage
const dataFromLocalStorage = localStorage.getItem("user");

// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);


// Now, "parsedData" will contain the full object with all the properties that were originally present in the `data` object

const ClinicID = parsedData?.id;
console.log(ClinicID, "AAAAAAAAAAAAAA1")
const ValueID = parsedData?.clinic_id;
console.log(ValueID, "AAAAAAAAAAAAAA")



export const ProfileApi = () => {

    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}





export const UpdateProfileData = (name, mname, lname, email, address, address2, city, dob, phone, pincode, state, img) => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("mname", mname);
    formdata.append("lname", lname);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("pincode", pincode);
    formdata.append("dob", dob);
    formdata.append("state", state);
    formdata.append("img", img);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_profile`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const LogoutProfile = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/logout`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const ViewProduct = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${Url}/api/view_product`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}




export const SingleProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/providerwise_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const SingleProductProvider = (p_id) => {
    console.log(p_id,)
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_single_product/${p_id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const OrderByPatient = (id, p_id, name, lname, address, address2, city, state, pincode, total, freeDelivery, rateDelivery, payOnline, Cod, StockPickup) => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const orderId = Math.floor(Math.random() * 1000000);
    var formdata = new FormData();
    formdata.append("patient_id", ClinicID);
    formdata.append("cart_id", "18");
    formdata.append("company_id", "1");
    formdata.append("first_name", name);
    formdata.append("last_name", lname);
    formdata.append("address1", address);
    formdata.append("address2", address2);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("postal_code", pincode);
    formdata.append("free_delivery", freeDelivery ? "yes" : "no");
    formdata.append("rate_delivery", rateDelivery ? "yes" : "no");
    formdata.append("total_amount", total);
    formdata.append("pay_online", payOnline ? "yes" : "no");
    formdata.append("cod", Cod ? "yes" : "no");
    formdata.append("order_id", orderId);
    formdata.append("stock_pickup", StockPickup ? "1" : "0");
    formdata.append("products", "{id=50}");
    formdata.append("amount", "200");


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/order`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const GetAllORderData = () => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/view_order_in_patient/704`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const Addtocart = async (id) => {
    try {
        let token = Cookies.get("user");
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("patient_id", ClinicID);
        formdata.append("product_id", id);
        formdata.append("quantity", "1");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        };


        const response = await fetch(`${Url}/api/addToCart`, requestOptions);
        const data = await response.json();
        return data.message; // Assuming the API returns a message in the response.
    } catch (error) {
        console.log('Error:', error);
        throw error; // Rethrow the error to be handled by the calling function.
    }
};


export const CheckoutData = () => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/viewCart/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const ChangePasswordPatient = (values) => {
    let { current_password, password, password_confirmation } = values;
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("current_password", current_password);
    formdata.append("password", password);
    formdata.append("password_confirmation", password_confirmation);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/changePassword`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const GetAppointmentRequest = () => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_schedule/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const ADDAPPOINRTMN = (Day, Type, Note, Amount) => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", ClinicID);
    formdata.append("clinic_id", ValueID);
    formdata.append("day", 'Sunday');
    formdata.append("type", '6 Min');
    formdata.append("notes", "Hii");
    formdata.append("amount", "10.00");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/appointment_by_patient`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const GETAPPOINTMENTTYPE = () => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_type_inclinic/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}



export const GETAPPREquest = () => {
    let token = Cookies.get("user")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_appointment_request/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}




export const DeleteCheckoutData = (id) => {
    let token = Cookies.get("clinic")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/deleteCart/${id}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const getDiscountCoupon = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_providers_coupons/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}


export const getDeliveryData = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_delivery_module_2/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}

export const GetAllPatientData = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_users/${ValueID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}
// 12-08-2023
export const GetAllPatientFiles = () => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_patient_files/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const ADDPatientFiles = (p_id, names, fileI) => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("patient_id", ClinicID);
    formdata.append("doctor_id", "703");
    formdata.append("clinic_id", ValueID);
    formdata.append("name", names);
    formdata.append("file", fileI);
    formdata.append("is_patient_visible", "1");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/add_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const DEeletPatientFiles = (id) => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/delete_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const EDITPatientFiles = (id) => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/single_patient_files/${id}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}
export const UpdatePatientFiles = (name, img, id) => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    formdata.append("name", "bobby");
    formdata.append("is_patient_visible", "1");
    formdata.append("file", img);
    formdata.append("id", id);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/update_patient_files`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}



export const UpcommingAppointmtnt = () => {
    let token = Cookies.get("user");
    console.log(token, "This Is token for all Api's");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/get_clinic_appointment_inpatient/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json();
        })
        .catch((error) => console.log('error', error));
}

export const getPaymentDetails = () => {
    let token = Cookies.get("user")
    console.log(token, "This Is token for all Api's")
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${Url}/api/payment_information_in_patient/${ClinicID}`, requestOptions)
        .then((result) => {
            return result.json()
        })
        .catch(error => console.log('error', error));
}