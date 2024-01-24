 

export default function Trailers({src}) {
  return (
    <div className="bg-[#222] h-[100vh] py-10 px-5 md:px-12 flex flex-col gap-10">
        <h1 className="text-4xl text-[#fff]">Trailers</h1>
        <iframe height="700" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
