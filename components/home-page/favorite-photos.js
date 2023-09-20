import styles from "@/components/home-page/favorite-photos.module.css";
import Image from "next/image";

export default function FavoritePhotos() {
  return (
    <div className={styles.aktivitas_container}>
      <div className={styles.aktivitas_skewed_grid}>
        <div id={styles.image_skewed_wrapper}>
          <Image
            src="/images/site/gedepeak.jpeg"
            alt="Image 1"
            id={styles.image_skewed}
            width={1000}
            height={750}
          />
        </div>
        <div id={styles.title_skewed_right}>
          <h3>puncak gunung gede, 2022</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className={`${styles.aktivitas_skewed_grid} ${styles.right_skewed}`}>
        <div id={styles.narrative_skewed_left}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div id={styles.title_skewed_left}>
          <h3>sukaluyu, cianjur, 2023</h3>
        </div>
        <div id={styles.image_skewed_wrapper}>
          <Image
            src="/images/site/gedepeak.jpeg"
            alt="Image 1"
            id={styles.image_skewed}
            width={2000}
            height={1500}
          />
        </div>
      </div>
      <div className={styles.aktivitas_skewed_grid}>
        <div id={styles.image_skewed_wrapper}>
          <Image
            src="/images/site/gedepeak.jpeg"
            alt="Image 1"
            id={styles.image_skewed}
            width={1000}
            height={750}
          />
        </div>
        <div id={styles.title_skewed_right}>
          <h3>rawalumbu, bekasi, 2020</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
      <div className={`${styles.aktivitas_skewed_grid} ${styles.right_skewed}`}>
        <div id={styles.narrative_skewed_left}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div id={styles.title_skewed_left}>
          <h3>kedungkandang, malang, 2021</h3>
        </div>
        <div id={styles.image_skewed_wrapper}>
          <Image
            src="/images/site/gedepeak.jpeg"
            alt="Image 1"
            id={styles.image_skewed}
            width={1000}
            height={750}
          />
        </div>
      </div>
      <div className={styles.aktivitas_skewed_grid}>
        <div id={styles.image_skewed_wrapper}>
          <Image
            src="/images/site/gedepeak.jpeg"
            alt="Image 1"
            id={styles.image_skewed}
            width={1000}
            height={750}
          />
        </div>
        <div id={styles.title_skewed_right}>
          <h3>pantai balekambang, malang, 2022</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
}
