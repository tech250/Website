import { Link } from "react-router-dom"
const Cta = () => {
  return (
    <div className="pb-6">
      <div className="custom-container text-center flex flex-col gap-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 w-fit mx-auto text-transparent bg-clip-text drop-shadow-[1px_1px_1px_black]">Lets Get In Touch</h2>
        <p className="text-black/50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam explicabo quos aliquam, culpa ut reprehenderit vero error sunt iste numquam dignissimos deserunt mollitia itaque, ab nostrum ratione sequi ullam ea? Provident corporis excepturi consequatur illum, tenetur, vitae placeat libero sit natus harum reprehenderit inventore magnam! Architecto dolorum aliquid ducimus.</p>
        <Link to="/contact-us" className=" border w-fit mx-auto py-2 px-4 rounded-md shadow-[3px_3px_1px_black] hover:scale-95 transition">Contact Us</Link>
      </div>
    </div>
  )
}

export default Cta