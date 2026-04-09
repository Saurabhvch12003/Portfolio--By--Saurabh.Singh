type Props = {
  title: string;
  description: string;
  github: string;
  image: string;
  tech?: string[];
};

export default function ProjectCard({
  title,
  description,
  github,
  image,
  tech = [],
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#1e293b] shadow-lg transition hover:-translate-y-2 hover:shadow-cyan-500/20">
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>

        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-cyan-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}