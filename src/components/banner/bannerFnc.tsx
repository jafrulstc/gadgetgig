import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface StateType {
    position: string[]
}

const bannerAnimate = $((state:any, imageIndex:number, btnClick?:boolean) => {     
    const posLen = state.position.length;   
    // debugger;
    if( btnClick ) {
        if(state.position[imageIndex] !== "0%" ) {
            const firstPart:string[] = state.position.slice(0, imageIndex).map( (value:string, index:number)=> `${index+1 * (-100)}%`).reverse();
            const secondPart:string[] = state.position.slice(imageIndex).map( (value:string, index:number)=> `${index * (100)}%`);
            const finalPart:string[] = [...firstPart,...secondPart];
            state.position = finalPart;
        }
    }
    else {
        if (imageIndex !== posLen - 1) {
            state.position = state.position.map((value:string) => `${parseInt(value) - 100}%`);
        }
        else {
            state.position = state.position.map((_:string, index:number) => `${index * 100}%`);
        }
    }
});

const ShowBannerImage = component$<{bannerImages:string[], state:StateType}>(({bannerImages, state}) => {
    return (

        bannerImages.map((image, imageIndex) => {
            return (
                <div key={imageIndex} class={`w-[100%] max-h-full banner-item px-1 transition-all ease-linear duration-500 absolute`}
                    style={{ left: state.position[imageIndex] }}
                    onClick$={() => bannerAnimate(state, imageIndex)}
                >

                    <Link href="#">
                        <img width={100} height={100} src={image} alt={`Image ${imageIndex}`} class="w-full max-h-[590px]" />
                    </Link>
                </div>
            )
        })
    )
});

const ShowBannerSlide = component$<{state:StateType}>(({state}) => {
    return (
        state.position.map((value:string, imageIndex:number) => (
            <div key={imageIndex} class="dot w-4 h-4 ssm:w-2 ssm:h-2 border bg-bg_gray_400 cursor-pointer rounded-xl transition-all ease-linear hover:bg-red-400 "
                onClick$={ ()=> bannerAnimate(state, imageIndex, true) }
            >
            </div>

        ))
    )
});

export { bannerAnimate, ShowBannerImage, ShowBannerSlide };
