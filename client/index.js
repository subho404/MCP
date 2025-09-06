require('dotenv').config();
const readline=require('readline/promises');
const {GoogleGenAI} =require( '@google/genai');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});




const chatHistory=[];

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
async function chatloop() {
    const question=await rl.question('You: ');
    chatHistory.push({
      
    })
}