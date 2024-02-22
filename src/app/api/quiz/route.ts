import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
export async function POST(req: NextRequest) {
try {
    const { prompt } = await req.json();
    if (prompt) {
    const openai = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });
    const chat = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages:[{role:"system" , content:`You Have to generate minimun 15 mcqs from this topic ${prompt} and also mark the correct question in it. If provided content is not enough to Genterate quiz then say please provide me meanigful content`}]
    });
    return NextResponse.json({message : chat.choices[0].message.content});
    }
    else{
    return new NextResponse("Plese Enter Your prompt" , {status:404})
    }
} catch (error) {
    return new NextResponse("Something Went Wrong" , {status:500})
}
}
