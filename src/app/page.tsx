"use client";

import { LinkButton } from "~/components/buttons/linkButton";
import { BaseLayout } from "~/components/layouts/baseLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./libs/firebase";

export default function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <BaseLayout>
      <div className="p-[16px]">
        <h1 className="text-3xl font-bold text-center">ホーム画面</h1>
        <div className="flex flex-col gap-4 mt-8 px-8">
          <LinkButton label="ご飯を記録する" url="/photo" disabled={!user} />
          <LinkButton
            label="記録の履歴"
            url="/photo/history"
            disabled={!user}
          />
          <LinkButton label="買い物リスト" url="/shopping" disabled={!user} />

          {loading ? (
            <>ロード中</>
          ) : (
            <>
              {!user ? (
                <LinkButton label="ログイン" url="/login" />
              ) : (
                <LinkButton label="ログアウト" url="/login" />
              )}
            </>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
