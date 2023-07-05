import Link from "next/link";
import Image from "next/image";
import videoBg from "@/images/background/video-bg.jpg";
import { useTranslations } from "next-intl";
const VideoArea = () => {
  
  const t = useTranslations('Messages');
  return (
    <section className="video-area bgc-black pt-250">
        <div className="container">
          <div className="row medium-gap align-items-end pt-80">
            <div className="col-lg-6">
              <div className="video-part rmb-65 wow fadeInRight delay-0-1s">
                <Image   src={videoBg} alt="Video" />
                <a
                  href="https://www.youtube.com/watch?v=4XByEZM6pMw"
                  className="mfp-iframe video-play"
                  tabIndex={-1}
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-content text-white pb-95 rpb-115 wow fadeInLeft delay-0-1s">
                <div className="section-title mb-30">
                  <h2>
                    {t("videocontent_title")}
                  </h2>
                </div>
                <ul className="list-style-three">
                  <li>{t("videocontent_list1")}</li>
                  <li>{t("videocontent_list2")}</li>
                   <li>{t("videocontent_list3")}</li>
                  <li>{t("videocontent_list4")}</li>
                   <li>{t("videocontent_list5")}</li>
                  <li>{t("videocontent_list6")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
export default VideoArea;
