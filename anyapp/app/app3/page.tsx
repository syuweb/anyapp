import { Noto_Sans_JP, M_PLUS_1p, Zen_Kaku_Gothic_New } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
    variable: "--font-noto-sans",
    subsets: ["latin"],
});

const mPlus1p = M_PLUS_1p({
    weight: ["400"],
    variable: "--font-m-plus-1p",
    subsets: ["latin"],
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
    weight: ["400"],
    variable: "--font-zen-kaku-gothic",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div>
            フォント（デフォルト）
            <div className={`${notoSansJP.className}`}>
                フォント（NOTO）
            </div>
            <div className={`${mPlus1p.className}`}>
                フォント（M_PLUS）
            </div>
            <div className={`${zenKakuGothic.className}`}>
                フォント（ZenKaku）
            </div>
        </div>
    );
}
