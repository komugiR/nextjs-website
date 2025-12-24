import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  const skills = [
    { title: "Next.js", desc: "このサイトを作っているフレームワーク。公開も楽で便利!" },
    { title: "python", desc: "一番初めに覚えた言語。データ分析とかで極稀に使う。(簡単な分析ならExcelで事足りる…)" },
    { title: "C#", desc: "授業では一番よく使う。次の学祭ではUnityでゲーム作るか検討中。" },
    { title: "SQL", desc: "本格的なデータベースやるなら使うんだろうけど、実際にアプリ開発で使ったことない。" },
    { title: "Go", desc: "一応読めはするけど、正直メリットがよく理解できてない。後で消すかも。" },
    { title: "Clip Studio", desc: "お絵描き楽しいよね。" },
  ];

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>MY STACK</h2>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{skill.title}</h3>
            <p style={{ color: '#075985', fontWeight: 'bold' }}>{skill.desc}</p>
          </div>
        ))}
      </div>

      <section className={styles.profileSection}>
        <div className={styles.photoCircle}>
          <Image
            src="/ムギ.jpg"
            alt="Profile Photo"
            width={128}
            height={128}
            className={styles.actualPhoto}
          />
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0284c7' }}>ムギ</h3>
        <p style={{ color: '#075985', fontWeight: 'bold', marginBottom: '2rem' }}>
          イラストやプログラミングなどの勉強をしています。最近アークナイツにはまりそうです。
        </p>

        <a
          href='https://github.com/komugiR'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.popButton}
        >
        <div className={styles.buttonBg}></div>
        <span className={styles.buttonText}>GitHub</span>
        </a>
      </section>
    </main>
  );
}