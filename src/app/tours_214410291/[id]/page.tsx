'use client';
import { useParams } from "next/navigation";
const TourDetailPage_214410291 = async ({params}: {params: { id: string}}) => {
    const param = await  params;
    console.log('params id', param.id);
    return  (
    <div>
        <h2 className="text-2xl">ID: </h2>
    </div>
    );
};
export default TourDetailPage_214410291;