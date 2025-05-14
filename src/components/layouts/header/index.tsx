import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  title: string;
  url?: string;
  right?: React.ReactNode;
};

export const Header = ({ title, url, right }: Props) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 mx-[-16px] px-4">
      {/* ヘッダー左側 */}
      <div className="flex items-center gap-1">
        {url && (
          <Link href={url}>
            <IoIosArrowBack size={24} />
          </Link>
        )}
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      {/* ヘッダー右側 */}
      <div>{right}</div>
    </div>
  );
};
