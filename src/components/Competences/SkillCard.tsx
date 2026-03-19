interface Props {
  name: string;
  logo: string;
}

export default function SkillCard({ name, logo }: Props) {
  return (
    <div className="min-w-[100px] bg-white rounded-xl shadow p-4 flex flex-col items-center gap-2 hover:scale-105 transition transform">
      <img
        src={logo}
        alt={name}
        className="w-16 h-16 object-contain"
      />
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
}