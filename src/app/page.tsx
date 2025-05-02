import { LinkButton } from "~/components/buttons/linkButton";
import { BaseLayout } from "~/components/layouts/baseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <div className="p-[16px]">
        <h1 className="text-3xl font-bold text-center">ホーム画面</h1>
        <div className="flex flex-col gap-4 mt-8 px-8">
          <LinkButton label="ご飯を記録する" url="/photo" />
          <LinkButton label="記録の履歴" url="/photo/history" />
          <LinkButton label="買い物リスト" url="/shopping" />
          {/* ログインしてないときだけ表示するようにする */}
          <LinkButton label="ログイン" url="/login" />
          {/* ログアウトは、リンク先でuseEffectでログアウトする */}
          <LinkButton label="ログアウト" url="/logout" />
        </div>
      </div>
    </BaseLayout>
  );
}
