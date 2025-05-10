"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BaseButton } from "~/components/buttons/baseButton";
import { LinkButton } from "~/components/buttons/linkButton";

export default function PhotoUploadPage() {
  const router = useRouter();
  const [memo, setMemo] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 実際のアップロード処理を実装
    console.log("Upload photo with memo:", memo);
    router.push("/photo");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">写真を追加</h1>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            写真
          </label>
          <input
            id="photo"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            required
          />
          {previewUrl && (
            <div className="mt-4 relative h-48">
              <Image
                src={previewUrl}
                alt="Preview"
                fill
                className="w-full h-full object-cover rounded"
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="memo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            メモ
          </label>
          <textarea
            id="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="メモを入力してください"
          />
        </div>

        <div className="flex gap-4 justify-between">
          <LinkButton label="戻る" url="back" className="w-[100px]" />
          <BaseButton label="保存" className="w-[100px]" />
        </div>
      </form>
    </div>
  );
}
