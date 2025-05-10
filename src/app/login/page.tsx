"use client";

import { BaseLayout } from "~/components/layouts/baseLayout";
import { signInWithPopup } from "firebase/auth";
import { BaseButton } from "~/components/buttons/baseButton";
import { auth, googleProvider } from "../libs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <BaseLayout>
      <div className="flex flex-col items-center h-screen p-[24px]">
        <h1 className="text-2xl font-bold">ログイン画面</h1>

        <div className="flex flex-col items-center my-16">
          {user ? (
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4 overflow-hidden">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="プロフィール画像"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl text-orange-600">
                        {user.displayName?.[0]?.toUpperCase() || "?"}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {user.displayName}
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">{user.email}</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">UID: {user.uid}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
              <p className="text-xl text-gray-600">未ログイン</p>
            </div>
          )}
        </div>

        {user ? (
          <BaseButton
            label="ログアウトする"
            onClick={handleLogout}
            className="w-[200px]"
          />
        ) : (
          <BaseButton
            label="googleでログインする"
            onClick={handleLogin}
            className="w-[200px]"
          />
        )}

        <BaseButton
          label="トップへ戻る"
          onClick={() => {
            router.push("/");
          }}
          className="mt-4 w-[200px]"
        />
      </div>
    </BaseLayout>
  );
}
