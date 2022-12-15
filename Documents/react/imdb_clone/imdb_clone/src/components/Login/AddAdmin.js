import "./signUp.css";

function AddAdmin() {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const setData = (e.target.value)
    
      
   
  
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add New Admin</h3>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control "
                placeholder="Enter first name"
                onChange={this.setData}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control "
                placeholder="Enter last name"
                onChange={this.setData}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control "
                placeholder="Enter email"
                onChange={this.setData}
                required
              />
            </div>
            <div className="form-group-signin">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.setData}
                required
              />
            </div>
            <div className="form-group-signin d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  
}

export default AddAdmin;
