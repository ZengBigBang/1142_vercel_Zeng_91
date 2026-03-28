import { fetchUsers } from "@/actions/userAction_214410291";
const UserList_214410291 = async () => {
    const users = await fetchUsers();
    console.log('users', users);
    return (
        <>
            {users?.map((user)=>{
                return <h3 key={user.id}>{user.email}</h3>;
            })}
        </>
    );
};

export default UserList_214410291;