export default function Video() {
    return (
        <video
            autoPlay
            loop
            muted
            style={{zIndex:-2}}
            className="absolute w-auto w-full h-full brightness-50 object-cover"
        >
            <source
                src="https://res.cloudinary.com/dvpjh1zsd/video/upload/v1713345288/bg_video_mnsymq.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    )
}
