const Employee = ({firstname, lastname, age:EmployeeAge}) => {
    return ( 
        <p>Employee: {firstname}  {lastname} who is {EmployeeAge}</p>
     );
}
 
export default Employee;