export default function Home() {
    const name = "Obed";
    const students = [
        {
            id: 101,
            name: "Obed",
            age: 25,
            city: "Nairobi"
        }, {
            id: 102,
            name: "Oslo",
            age: 20,
            city: "Kigali"
        }
    ]
    
    return (
        <div>
            <h1>This is my Home page</h1>
            <p>My name is {name}</p>
            <div>
                <h2>This is the student list</h2>
                {students.map(function(stud){
                    return(
                        <ol key={stud.id}>
                            <li>Name: {stud.name}</li>
                            <li>Age: {stud.age}</li>
                            <li>City: {stud.city}</li>
                        </ol>
                    )
                })}
            </div>
        </div>
    )
}