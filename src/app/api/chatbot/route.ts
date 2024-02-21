import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req : NextRequest) {
  try {
    const {prompt} = await req.json()
  if (!prompt) {
    return new NextResponse("Please Enter Input" ,{status:404})
  }else{
    const openai = new OpenAI({
        apiKey : process.env.OPEN_AI_API_KEY
    })
    const chat = await openai.chat.completions.create({
        messages:[{role:"system" , content:`You have to act like you only give tehnical and study type answer according to ${prompt} if some ask any out relelate studies question answer that you answer the study related question`}],
        model:"gpt-3.5-turbo"
    })
    
    return NextResponse.json({message : chat.choices[0].message.content}) 
  }
  } catch (error) {
    return new NextResponse("Internal Server Error" ,{status:500})
  }
}