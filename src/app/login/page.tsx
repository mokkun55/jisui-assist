"use client";

import { BaseLayout } from "~/components/layouts/baseLayout";
import { signInWithPopup } from "firebase/auth";
import { BaseButton } from "~/components/buttons/baseButton";
import { auth, googleProvider } from "../libs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Page() {
  const [user] = useAuthState(auth);
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
          <h2>ログイン情報</h2>
          {user ? (
            <div>
              <p>ユーザー名: {user.displayName}</p>
              <p>メールアドレス: {user.email}</p>
              <p>UID: {user.uid}</p>
            </div>
          ) : (
            <p>未ログイン</p>
          )}
        </div>

        {user ? (
          <BaseButton label="ログアウトする" onClick={handleLogout} />
        ) : (
          <BaseButton label="googleでログインする" onClick={handleLogin} />
        )}
      </div>
    </BaseLayout>
  );
}
