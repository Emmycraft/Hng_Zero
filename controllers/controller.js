const express = require('express')


const getUserData=(req,res,next)=>{
    const getTime=new Date()


    const istoTime=getTime.toISOString().split('*',3)


    res.json({email:'emmanuelokoh678@gmail.com',
    current_datetime:istoTime,
    github_url:'https://github.com/Emmycraft/Hng_Zero.git'})
}

module.exports={userData:getUserData}