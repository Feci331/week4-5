const data = [
{
    name: "kovács jános",
    age: 29,
    subjects: [
        subjectName: "maths",
        subjectGrade: 5,
        subject: 
            
        ]       
    ]
    
data.forEach(e => {
    console.log(e.name)
    e.subjects.forEach(dataElement => console.log(`${e.subjectsName}: ${e.subjectGrade}`))
})