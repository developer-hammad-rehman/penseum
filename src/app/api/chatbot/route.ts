import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req : NextRequest) {
    const {prompt} = await req.json()
    const openai = new OpenAI({
        apiKey : process.env.OPEN_AI_API_KEY
    })
    const chat = await openai.chat.completions.create({
        messages:[{role:"assistant" , content:`hey listen you have to give only tecnical answer only related to study ok . ON the intruction ${prompt} and donot give me the answer on first order ok`}],
        model:"gpt-3.5-turbo"
    })
    
    return NextResponse.json({message : chat.choices[0].message.content})
}