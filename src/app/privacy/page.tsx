import type { Metadata } from "next";
import Link from "next/link";

import { ContactLink } from "@/components/ContactLink";
import { ControllerBlock } from "@/components/legal/ControllerBlock";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = { title: "Gizlilik Politikası" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      meta={
        <>
          Son güncelleme: {formatDate(site.legalUpdatedAt, "tr")} · <Link href="/en/privacy/">English</Link>
        </>
      }
    >
      <p>
        Fuluu (“uygulama”) bir İngilizce öğrenme uygulamasıdır. Bu metin, uygulamayı kullanırken hangi
        verilerin işlendiğini, neden işlendiğini ve bu veriler üzerindeki haklarınızı açıklar. Yasal
        bilgilendirme için <Link href="/kvkk/">KVKK Aydınlatma Metni</Link>’ne de bakın.
      </p>

      <h2>1. Veri sorumlusu</h2>
      <ControllerBlock contactLabel="İletişim" />

      <h2>2. Hangi verileri topluyoruz?</h2>
      <table>
        <thead>
          <tr><th>Veri</th><th>Amaç</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>E-posta adresi (hesap açarsanız)</td>
            <td>Tek kullanımlık kod ile giriş ve ilerlemenin cihazlar arasında saklanması. Şifre kullanılmaz.</td>
          </tr>
          <tr>
            <td>Dil tercihi, hedef seviye, günlük hedef, öğrenme amacı, seviye belirleme sonucu</td>
            <td>Öğrenme yolunuzu kişiselleştirmek.</td>
          </tr>
          <tr>
            <td>İlerleme: puan (XP), seri, ders ve alıştırma sonuçları, hata ve tekrar listesi, can (kalp) durumu, saat dilimi</td>
            <td>İlerlemeyi kaydetmek, tekrarları planlamak, can sistemini yönetmek.</td>
          </tr>
          <tr>
            <td>Bildirdiğiniz alıştırmalar (alıştırma kimliği, verdiğiniz cevap, doğru cevap, bildirim nedeni, dil, uygulama sürümü)</td>
            <td>Hatalı veya anlaşılmaz içeriği düzeltmek.</td>
          </tr>
          <tr>
            <td>Çökme ve hata raporları (cihaz modeli, işletim sistemi ve uygulama sürümü, hata izi)</td>
            <td>Uygulamayı kararlı tutmak. Konuşma ve cevaplarınız raporlara eklenmez.</td>
          </tr>
        </tbody>
      </table>
      <p>Hesap açmadan da uygulamayı kullanabilirsiniz; bu durumda ilerlemeniz yalnızca cihazınızda tutulur.</p>

      <h2>3. Mikrofon ve konuşma tanıma</h2>
      <p>
        Konuşma alıştırmalarında mikrofon ve konuşma tanıma izni istenir. Ses kaydı Fuluu sunucularına
        gönderilmez ve saklanmaz. Konuşmanız, cihazınızdaki işletim sisteminin konuşma tanıma hizmeti
        (iOS’ta Apple, Android’de Google) tarafından metne çevrilir; bu hizmet ilgili sağlayıcının
        gizlilik politikasına tabidir. İzni cihaz ayarlarından kapatabilirsiniz; yalnızca konuşma
        alıştırmaları çalışmaz.
      </p>

      <h2>4. Bildirimler</h2>
      <p>
        Günlük hatırlatma, izin verirseniz cihazınızda yerel olarak planlanır. Bildirimler için
        sunucuya cihaz kimliği gönderilmez.
      </p>

      <h2>5. Hizmet sağlayıcılar</h2>
      <ul>
        <li><strong>Supabase</strong>: hesap, kimlik doğrulama ve ilerleme verilerinin barındırılması.{site.supabaseRegion ? ` Sunucu konumu: ${site.supabaseRegion}.` : null}</li>
        <li><strong>Sentry</strong>: çökme ve hata raporları. Kişisel veri ekleme ayarı kapalıdır.</li>
        <li><strong>Apple App Store / Google Play</strong>: dağıtım ve (varsa) abonelik ödemeleri. Fuluu ödeme bilgilerinize erişemez.</li>
      </ul>
      <p>Verilerinizi satmıyor, reklam veya izleme amacıyla kullanmıyor, pazarlama için paylaşmıyoruz.</p>

      <h2>6. Verilerin yurt dışına aktarılması</h2>
      <p>
        Hizmet sağlayıcılarımızın sunucuları Türkiye dışında olabilir. Aktarım, 6698 sayılı Kanun’un 9.
        maddesindeki şartlara uygun yapılır.
      </p>

      <h2>7. Saklama süresi</h2>
      <p>
        Verileriniz hesabınız açık olduğu sürece saklanır. Hesabı sildiğinizde profiliniz, ilerlemeniz
        ve etkinlik kayıtlarınız kalıcı olarak silinir. Çökme raporları sınırlı bir süre sonra
        otomatik silinir.
      </p>

      <h2>8. Haklarınız ve hesabı silme</h2>
      <p>
        Verilerinize erişme, düzeltme, silme ve işlenmesine itiraz etme hakkınız var. Hesabınızı
        uygulamadan <em>Profil → Hesap → Hesabı sil</em> yolundan silebilirsiniz; ayrıntılar için{" "}
        <Link href="/delete-account/">Hesap Silme</Link> sayfasına bakın. Diğer talepleriniz için{" "}
        <ContactLink /> adresine yazabilirsiniz.
      </p>

      <h2>9. Çocuklar</h2>
      <p>
        Uygulama 13 yaşından küçük çocuklara yönelik değildir; onların kişisel verilerini bilerek
        toplamayız.
      </p>

      <h2>10. Değişiklikler</h2>
      <p>Politika güncellendiğinde yeni tarih bu sayfada yayımlanır.</p>
    </LegalPage>
  );
}
