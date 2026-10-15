import type { Metadata } from "next";

import { ContactLink } from "@/components/ContactLink";
import { Callout } from "@/components/legal/Callout";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Hesap Silme / Account Deletion" };

export default function DeleteAccountPage() {
  return (
    <LegalPage title="Hesap ve Veri Silme" meta="Account and data deletion · English below">
      <h2>Uygulamadan silme</h2>
      <ol>
        <li>Fuluu’yu açın ve hesabınızla giriş yapın.</li>
        <li><em>Profil → Hesap → Hesabı sil</em> yolunu izleyin.</li>
        <li>“Evet, her şeyi sil” ile onaylayın.</li>
      </ol>
      <Callout>
        <p>
          Hesabınız, profiliniz, ilerlemeniz ve etkinlik kayıtlarınız tüm cihazlardan{" "}
          <strong>kalıcı olarak silinir</strong> ve geri alınamaz.
        </p>
      </Callout>

      <h2>Uygulamaya erişemiyorsanız</h2>
      <p>
        Hesabınızın e-posta adresinden <ContactLink /> adresine “Hesabımı sil” konulu bir e-posta
        gönderin. Talebiniz en geç 30 gün içinde işleme alınır.
      </p>

      <h2>Neler silinir?</h2>
      <ul>
        <li>E-posta adresiniz ve giriş bilgileriniz</li>
        <li>Profil ve öğrenme tercihleriniz, puanınız ve serileriniz</li>
        <li>Ders, alıştırma, hata ve tekrar kayıtlarınız, can durumunuz</li>
      </ul>
      <p>
        Abonelik App Store veya Google Play üzerinden yönetilir; hesabı silmek aboneliği iptal etmez.
        Aboneliği mağaza ayarlarınızdan ayrıca iptal edin.
      </p>

      <section lang="en">
        <h2>Account deletion (English)</h2>
        <p>
          In the app: <em>Profile → Account → Delete account</em>, then confirm. Your account, profile,
          progress and activity records are permanently deleted on all devices.
        </p>
        <p>
          If you cannot access the app, email <ContactLink /> from your account’s email address with
          the subject “Delete my account”. Requests are handled within 30 days.
        </p>
        <p>
          Subscriptions are managed by the App Store or Google Play; deleting your account does not
          cancel a subscription, so cancel it separately in your store settings.
        </p>
      </section>
    </LegalPage>
  );
}
