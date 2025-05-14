import Image from "next/image";
import { Header } from "~/components/layouts/header";

// モックデータ
const mockPhoto = {
  id: "1",
  imageUrl: "https://picsum.photos/800/600",
  memo: "今日の夕食",
  createdAt: "2024-03-20T12:00:00Z",
};

export default async function PhotoDetailPage({
  params,
}: {
  params: { photoId: string };
}) {
  return (
    <div className="container mx-auto px-4">
      <Header title="XX日の夕飯" url="/photo" />
      <div className="max-w-2xl mx-auto mt-4">
        <p>画像ID: {params.photoId}</p>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={mockPhoto.imageUrl}
              alt={mockPhoto.memo}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-gray-800 text-lg mb-4">{mockPhoto.memo}</p>
            <p className="text-gray-500 text-sm">
              {new Date(mockPhoto.createdAt).toLocaleDateString("ja-JP")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
