import {HashLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center items-center h-[50vh]">
            <HashLoader color="blue" size="70" />
        </div>
    )
}