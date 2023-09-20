import styles from "@/components/home-page/featured-photos.module.css";
import Image from "next/image";

export default function FeaturedPhotos() {
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
          <h3>KBM</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <div className={`${styles.aktivitas_skewed_grid} ${styles.right_skewed}`}>
        <div id={styles.narrative_skewed_left}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
        <div id={styles.title_skewed_left}>
          <h3>Halaqah</h3>
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
          <h3>Muhadharah</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
      <div className={`${styles.aktivitas_skewed_grid} ${styles.right_skewed}`}>
        <div id={styles.narrative_skewed_left}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
        <div id={styles.title_skewed_left}>
          <h3>Keasramaan</h3>
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
          <h3>Ekstrakulikuler</h3>
        </div>
        <div id={styles.narrative_skewed_right}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </div>
  );
}
