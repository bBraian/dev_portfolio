import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { WorkExperienceCard } from "./WorkExperienceCard";
import { Footer } from "../../components/Footer";

export default function About() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const { language } = useContext(AppContext);
    
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-12 pt-10 md:pt-20"
        >
            <div className="space-y-6 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-titles-light dark:text-titles-dark transition-colors">
                    {language.about_me}
                </h1>
                <p className="text-lg text-contents-light dark:text-contents-dark leading-relaxed transition-colors">
                    {language.desc_about_me}
                </p>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-titles-light dark:text-titles-dark transition-colors">
                    {language.work_experience}
                </h2>
                <div className="bg-boxes-light dark:bg-boxes-dark rounded-2xl p-6 md:p-8 transition-colors border border-separator-light dark:border-separator-dark">
                    <WorkExperienceCard 
                        title="Software Developer Jr" 
                        company="Openfy" 
                        locale="Brochier"
                        startDate={`${language.month[11]} 2020`}
                        endDate={`${language.month[7]} 2021`}
                    />
                    <WorkExperienceCard 
                        title="Web Developer" 
                        company="Datacode Sistemas" 
                        locale="Brochier"
                        startDate={`${language.month[7]} 2021`}
                        endDate={`${language.month[11]} 2022`}
                    />
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-titles-light dark:text-titles-dark transition-colors">
                    {language.education}
                </h2>
                <div className="bg-boxes-light dark:bg-boxes-dark rounded-2xl p-6 md:p-8 transition-colors border border-separator-light dark:border-separator-dark">
                    <WorkExperienceCard 
                        title="Analysis and systems development" 
                        company="Unisinos"
                        startDate={`${language.month[1]} 2020`}
                        endDate={`${language.month[5]} 2024`}
                    />
                </div>
            </div>

            <Footer />
        </motion.div>
    )
}
