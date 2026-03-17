import { Building2, MapPin, Calendar } from 'lucide-react';

export function WorkExperienceCard({ title, company, locale, startDate, endDate, type = "Full Time" }) {
    return (
        <div className="py-6 border-b border-separator-light dark:border-separator-dark last:border-0">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-4">
                <h3 className="text-xl font-medium text-titles-light dark:text-titles-dark">
                    {title}
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 self-start md:self-auto">
                    {type}
                </span>
            </div>
                
            <div className="flex flex-col md:flex-row justify-between gap-4 text-contents-light dark:text-contents-dark">
                <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm">
                    <div className="flex items-center gap-2">
                        <Building2 size={16} />
                        <span>{company}</span>
                    </div>
                    {locale && (
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{locale}</span>
                        </div>
                    )}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar size={16} />
                    <span>{startDate} - {endDate}</span>
                </div>
            </div>
        </div>
    )
}
