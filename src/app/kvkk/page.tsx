import type { Metadata } from "next";
import Link from "next/link";

import { ContactLink } from "@/components/ContactLink";
import { ControllerBlock } from "@/components/legal/ControllerBlock";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni" };

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      meta={`6698 sayılı Kişisel Verilerin Korunması Kanunu m. 10 kapsamında · Son güncelleme: ${formatDate(site.legalUpdatedAt, "tr")}`}
    >
      <h2>1. Veri sorumlusu</h2>
      <ControllerBlock contactLabel="İletişim" />

      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li><strong>Kimlik/iletişim:</strong> e-posta adresi (yalnızca hesap açarsanız).</li>
        <li>
          <strong>Kullanıcı işlemi:</strong> öğrenme tercihleri, seviye belirleme sonucu, puan, seri, ders
          ve alıştırma sonuçları, hata ve tekrar listesi, can durumu, saat dilimi, bildirdiğiniz
          alıştırmalar ve verdiğiniz cevaplar.
        </li>
        <li><strong>İşlem güvenliği:</strong> çökme ve hata raporları (cihaz modeli, işletim sistemi ve uygulama sürümü).</li>
      </ul>
      <p>
        Ses kayıtlarınız tarafımızca toplanmaz ve saklanmaz; konuşma tanıma cihazınızdaki işletim
        sistemi hizmeti tarafından yapılır. Özel nitelikli kişisel veri işlenmez.
      </p>

      <h2>3. İşleme amaçları ve hukuki sebepler</h2>
      <table>
        <thead>
          <tr><th>Amaç</th><th>Hukuki sebep (KVKK m. 5/2)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Hesabın oluşturulması, giriş, ilerlemenin saklanması ve uygulamanın sunulması</td>
            <td>Sözleşmenin kurulması veya ifası (m. 5/2-c)</td>
          </tr>
          <tr>
            <td>Öğrenme yolunun kişiselleştirilmesi, içerik hatalarının düzeltilmesi, çökme raporlarıyla kararlılığın sağlanması</td>
            <td>Veri sorumlusunun meşru menfaati (m. 5/2-f)</td>
          </tr>
          <tr>
            <td>Yasal yükümlülüklerin yerine getirilmesi ve taleplerin yanıtlanması</td>
            <td>Hukuki yükümlülük (m. 5/2-ç)</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Toplama yöntemi</h2>
      <p>Veriler uygulama üzerinden, otomatik ve elektronik yolla toplanır.</p>

      <h2>5. Aktarım</h2>
      <p>
        Veriler; barındırma için Supabase’e, hata raporlama için Sentry’ye aktarılır. Bu sağlayıcıların
        sunucuları Türkiye dışında olabilir; yurt dışına aktarım Kanun’un 9. maddesine uygun yapılır.
        Yasal zorunluluk dışında verileriniz başka kişi veya kurumlara aktarılmaz.
      </p>

      <h2>6. Saklama süresi</h2>
      <p>Hesabınız açık olduğu sürece saklanır; hesabı sildiğinizde kalıcı olarak silinir.</p>

      <h2>7. Haklarınız (m. 11)</h2>
      <ul>
        <li>Verilerinizin işlenip işlenmediğini öğrenme ve bilgi talep etme,</li>
        <li>İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
        <li>Kanun’un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme ve bunun aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
        <li>Otomatik sistemlerle analiz sonucu aleyhinize bir sonuç çıkmasına itiraz etme,</li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme.</li>
      </ul>

      <h2>8. Başvuru</h2>
      <p>
        Haklarınızı kullanmak için <ContactLink /> adresine yazabilirsiniz. Talebiniz niteliğine göre en
        geç 30 gün içinde sonuçlandırılır. Hesabınızı ve verilerinizi uygulamadan da silebilirsiniz:{" "}
        <Link href="/delete-account/">Hesap Silme</Link>.
      </p>
    </LegalPage>
  );
}
