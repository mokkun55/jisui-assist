"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "~/components/buttons/linkButton";
// モックデータ
const mockPhotos = [
  {
    id: "1",
    imageUrl: "https://picsum.photos/400/300",
    memo: "今日の夕食",
    createdAt: "2024-03-20T12:00:00Z",
  },
  {
    id: "2",
    imageUrl: "https://picsum.photos/400/300",
    memo: "朝ごはん",
    createdAt: "2024-03-19T08:00:00Z",
  },
];

export default function PhotoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">ご飯記録</h1>
        <LinkButton label="写真を追加" url="/photo/upload" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPhotos.map((photo) => (
          <Link
            key={photo.id}
            href={`/photo/${photo.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={photo.imageUrl}
                alt={photo.memo}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-800 font-medium">{photo.memo}</p>
              <p className="text-gray-500 text-sm">
                {new Date(photo.createdAt).toLocaleDateString("ja-JP")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
