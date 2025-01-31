
const express=require('express')

const app=express()

const userRoute=require('./route/user')

const cors=require('cors')
app.use(cors())

app.use('/api',userRoute)

const port=process.env.PORT || 5400
app.listen(port,(

)=>{console.log(`server is running currently on port:${port}`)})
