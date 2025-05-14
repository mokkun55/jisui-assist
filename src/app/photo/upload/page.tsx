"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BaseButton } from "~/components/buttons/baseButton";
import { LinkButton } from "~/components/buttons/linkButton";
import { Header } from "~/components/layouts/header";
export default function PhotoUploadPage() {
  const router = useRouter();
  const [memo, setMemo] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">("");

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
    <div className="container mx-auto px-4">
      <Header title="写真を追加" url="/photo" />

      <form onSubmit={handleSubmit} className="max-w-lg mt-4">
        <div className="mb-6">
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            写真<span className="text-red-500 ml-1">*</span>
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
            <div className="mt-4 relative h-[300px]">
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

        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            金額
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="w-full p-2 border rounded pr-8"
            placeholder="金額を入力してください"
            min="0"
          />
          <span className="relative -ml-6 text-gray-500">円</span>
        </div>

        <div className="flex gap-4 justify-between">
          <LinkButton
            label="戻る"
            url="back"
            className="w-[100px]"
            variant="gray"
          />
          <BaseButton label="保存" className="w-[100px]" />
        </div>
      </form>
    </div>
  );
}
