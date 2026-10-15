import styles from "./LevelPath.module.css";

const levels = [
  { code: "A1", name: "Başlangıç", description: "Temel cümleler: to be, can, there is / are." },
  { code: "A2", name: "Temel", description: "Geçmişi anlat, planlarını söyle, karşılaştır." },
  { code: "B1", name: "Orta", description: "Used to, koşul cümleleri ve edilgen yapı." },
  { code: "B2", name: "Orta üstü", description: "Past perfect, aktarılan konuşma ve dilekler." },
];

export function LevelPath() {
  return (
    <section className={`section ${styles.band}`}>
      <div className="container">
        <p className="eyebrow">Adım adım</p>
        <h2 className="section-title">Sıfırdan orta üstü seviyeye</h2>
        <p className="section-lead">
          Avrupa Dil Çerçevesi’ne (CEFR) göre sıralanmış ünitelerle, her seviyede ne öğrendiğini
          bilerek ilerle.
        </p>

        <ol className={styles.path}>
          {levels.map((level) => (
            <li key={level.code} className={styles.step}>
              <span className={styles.code}>{level.code}</span>
              <h3>{level.name}</h3>
              <p>{level.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
