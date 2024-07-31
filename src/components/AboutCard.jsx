
const Card = ({ title, subtitle, Icon, href }) => {
    return (
      <a
        href={href}
        className="w-56 p-4 m-2 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-[#FFF7F3]"
      >
        <div className="w-60 absolute inset-0 bg-gradient-to-r from-[#433E49] to-[#8d7c71] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
  
        <Icon className="bg-transparent absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#433E49] group-hover:rotate-12 transition-transform duration-300" />
        <Icon className="bg-transparent mb-2 text-2xl text-[#433E49] group-hover:text-white transition-colors relative z-10 duration-300" />
        <h3 className="bg-transparent font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 font-lato">
          {title}
        </h3>
        <p className="bg-transparent text-slate-400 group-hover:text-violet-200 relative z-10 duration-300 text-sm font-lato">
          {subtitle}
        </p>
      </a>
    );
  };

export default Card