import axios from 'axios'

export async function register( email,password,name,mobile,location) {
  try {
    const response = await fetch('http://localhost:5000/router/registerdetails', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: email,
        password:password,
        name:name,
        mobile:mobile,
        location:location
       
      }),
      
    }).then(response=>response.json())
    .then(data=>{
      let error=document.querySelector('.error');

      error.innerHTML=""

      data.errors.forEach(function(err){
        error.innerHTML+=`<li>${err.msg}</li>`;
      })
    })
    console.log('signIn-Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('signIn-Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}




export const login = (email,password) => {
  return axios
    .post('http://localhost:5000/router/login', {
      email: email,
      password: password
    })
    .then(response => {
      localStorage.setItem('Token', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}





export async function editProfile(requestBody) {
  try {
    const token = localStorage.getItem('Token');
    console.log(`Token ${token}`);
    const response = await fetch('http://localhost:5000/router/editProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 404 || 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('updateOrganization Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}




export async function Profile() {
  try {
    const token = localStorage.getItem('Token');
    console.log(`Token ${token}`);
    const response = await fetch(
      'http://localhost:5000/router/profile',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    console.log('getSettings Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getSettings-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}







































export async function signIn(email, password) {
  try {
    const response = await fetch('v1/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    console.log('Login-Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('Login-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function signUp(firstName, lastName, phone, userName, email, password, bio) {
  try {
    const response = await fetch('v1/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName :firstName,
        lastName : lastName,
        phone :phone,
        userName: userName,
        email: email,
        password: password,
        bio: bio
      }),
    });
    console.log('signIn-Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('signIn-Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}



export async function getAllNewsFeed() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/getallpost', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log('Response', response);
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    {
      return response;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}



export async function addPost(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('/v1/createpost', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('AddPost Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}






























































export async function addEmployee(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('/v1/employee', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('AddEmployee Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}

export async function createOrganization(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('v1/createBusinessProfile', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('createOrganization Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}

export async function updateOrganization(requestBody, id) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('/v1/businessProfile/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 404 || 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('updateOrganization Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}

export async function addSubscriptions(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      '/v1/productSubscription',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(requestBody),
      },
    );
    console.log('Add Subscription Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('AddSubscription Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getAllProductSubscription() {
  try {
    // const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWRjNmQ1Mjk2OTQ1NTIzNjY4NzMyYTIzIiwiaWF0IjoxNTczMzI1MTI5LCJleHAiOjE1NzMzMzUxMjl9.citYWxwy1STnmVXI2iUQ95uwXJxOWrBS8frDT5Pps5o'
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/productSubscriptions', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log('Response', response);
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    {
      return response;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deleteSubscriptionList(driverId) {
  try {
    //const token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQyYWVkNTg0OGNmNGYyMzhjOGRiYWM4IiwiaWF0IjoxNTYzMTA4NDM5LCJleHAiOjEwMDAwMDAwMDE1NjMxMDg1MDB9.Rz0E_wWuMK9LHdx0TzUt3qHGDbmhnL9PLKjbOd3vr2o'
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(`/v1/productSubscription/` + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },

    });
    console.log('Response', response);
    return await response.json();
  } catch (e) {
    throw e;
  }
}

export async function addSettings(requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      'v1/createSettings',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(requestBody),
      },
    );
    console.log('addSettings Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('addSettings Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function updateSettings(id, requestBody) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      '/v1/settings/' + id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(requestBody),
      },
    );
    console.log('updateSettings Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('updateSettings-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function createSettings() {
  try {
    const token = localStorage.getItem('token');
    console.log('Token ${token}');
    const response = await fetch('/v1/createSettings', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      // body: JSON.stringify({
      //   renewalReminder: renewalReminder,
      //   subscriptionAlerts: subscriptionAlerts,
      //   productReminders: productReminders,
      // }),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('createSettings Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getSettings() {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      '/v1/setting',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    console.log('getSettings Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getSettings-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getAllEmployees() {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      '/v1/employees',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      },
    );
    console.log('getAllEmployees Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getAllEmployees-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getAllSettings() {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch(
      '/v1/settings',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      },
    );
    console.log('getAllSettings Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getAllSettings-Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getProduct(id) {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/product/' + id, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },

    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getProduct Response', response);
    {
      return response;
    }

  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getAllVendors() {
  try {
    //  const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWRjNTY1NTY1ZmViNWIzM2VlNDIwMjBiIiwiaWF0IjoxNTc0NDA0OTQ2LCJleHAiOjE1NzQ0MTQ5NDZ9.viozYlcZhjhc22lXgmCnusINyS1LoIMghn2cl9Ddb3g'
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/vendors', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },

    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getAllVendors Response', response);
    {
      return response;
    }


  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getVendor(id) {
  try {
    //  const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWRjNTY1NTY1ZmViNWIzM2VlNDIwMjBiIiwiaWF0IjoxNTc0NDA0OTQ2LCJleHAiOjE1NzQ0MTQ5NDZ9.viozYlcZhjhc22lXgmCnusINyS1LoIMghn2cl9Ddb3g'
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/vendor/' + id, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },

    });
    console.log('vendor Response', response);
    return await response.json();

  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deleteProductSubscription(id) {
  try {
    //const token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQyYWVkNTg0OGNmNGYyMzhjOGRiYWM4IiwiaWF0IjoxNTYzMTA4NDM5LCJleHAiOjEwMDAwMDAwMDE1NjMxMDg1MDB9.Rz0E_wWuMK9LHdx0TzUt3qHGDbmhnL9PLKjbOd3vr2o'
    const token = localStorage.getItem('token');
    console.log('Token ${token}');
    const response = await fetch('/v1/productSubscription/' + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('deleteProductSubscription Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function deleteEmployee(id) {
  try {
    //const token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQyYWVkNTg0OGNmNGYyMzhjOGRiYWM4IiwiaWF0IjoxNTYzMTA4NDM5LCJleHAiOjEwMDAwMDAwMDE1NjMxMDg1MDB9.Rz0E_wWuMK9LHdx0TzUt3qHGDbmhnL9PLKjbOd3vr2o'
    const token = localStorage.getItem('token');
    console.log('Token ${token}');
    const response = await fetch('/v1/employee/' + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    console.log('deleteEmployee Response', response);
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('deleteEmployee Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function createBusinessProfile(name, industrySegment, employeeCount) {
  try {
    const token = localStorage.getItem('token');
    console.log('Token ${token}');
    const response = await fetch('/v1/createBusinessProfile', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({
        name: name,
        industrySegment: industrySegment,
        employeeCount: employeeCount,
      }),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('createBusinessProfile Response', response);
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}

export async function getBusinessProfile() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/businessProfile', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },

    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getBusinessProfile Response', response);
    {
      return response;
    }

  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getAllBusinessProfile() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/v1/businessProfiles', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getAllBusinessProfile Response', response);
    {
      return response;
    }

  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function getAllProductSubscriptions() {
  try {
    const token = localStorage.getItem('token');
    console.log(`GetShipmentToken ${token}`);
    const response = await fetch('/v1/productSubscriptions', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,

      },

    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 422) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500 || 504) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('getAllProductSubscriptions Response', response);
    {
      return response;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}




export async function updateSubscriptionStauts(subscriptionStatus, id) {
  try {
    const token = localStorage.getItem('token');
    console.log(`Token ${token}`);
    const response = await fetch('/v1/productSubscription/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        subscriptionStatus : subscriptionStatus
      }),
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 400 || 404 || 401) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status === 500) {
      let errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    console.log('updateSubscriptionStauts Response', response);
    {
      return response;
    }

  } catch (e) {
    throw e;
  }
}