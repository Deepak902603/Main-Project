function Profile({user}){
    return(<>
    <h2>
        Name:{user.Name}
        <br />
        RollNo:{user.RollNo}
        <br />
        RegdNo:{user.RegdNo}
        <br />
        Branch:{user.Branch}
        <br />
        College Name:{user.Collge_Name}
        <br />
        Place:{user.Place}
    </h2>
    </>)
}
export default Profile;