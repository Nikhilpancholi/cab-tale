import { MessageCircle } from "lucide-react"

const WhatsappUs = () => {
  return (
        <div className="fixed bottom-6 right-6 z-50 group">
          <a
            href="https://wa.me/8537664228"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <span className="pointer-events-none origin-right scale-0 rounded-full bg-[#25D366] px-3 py-2 text-sm font-medium text-white shadow-lg opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
              WhatsApp Us
            </span>
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105">
              <MessageCircle size={30} strokeWidth={2.2} />
            </span>
          </a>
        </div>
  )
}

export default WhatsappUs
