import { NextResponse } from "next/server";
const users=[
    {
        id:1,
        name:"Nguyễn Văn A",
        address: "HCM"
    },
    {
        id:2,
        name:"Nguyễn Văn B",
        address: "hÀ NỘI"
    },
    {
        id:3,
        name:"Nguyễn Văn c",
        address: "Hà giang"
    },
]
export async function GET(){
    return NextResponse.json("data trả về")
}