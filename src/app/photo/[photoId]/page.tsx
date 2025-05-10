"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

// モックデータ
const mockPhoto = {
  id: "1",
  imageUrl: "https://picsum.photos/800/600",
  memo: "今日の夕食",
  createdAt: "2024-03-20T12:00:00Z",
};

export default function PhotoDetailPage({
  params,
}: {
  params: { photoId: string };
}) {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-blue-500 hover:text-blue-600"
          >
            ← 戻る
          </button>
        </div>

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
