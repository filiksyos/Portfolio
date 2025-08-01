import Card from '../ui/card';
import Anchor from '../ui/anchor';
import { FaArrowRight } from 'react-icons/fa6';

export default function OtherProjects() {
    return (
        <Card className='group relative bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-green-500"></div>
                <div className="absolute top-12 right-8 w-6 h-6 rounded-full bg-teal-500"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-blue-500"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-purple-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-500"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🐙</span>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Other Projects
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            16+ repositories including AI tools, web apps, mobile apps, and utilities. 
                            Many with demo videos showing real applications.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                                7 AI Tools
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                                5 Web Apps
                            </span>
                            <span className="px-2 py-1 text-xs rounded-full bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200">
                                4 Utilities
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            TypeScript • Python • Kotlin • JavaScript
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-3 left-3">
                    <Anchor
                        className='cancel-drag size-10 justify-end transition-all ease-in-out group-hover:w-full'
                        href="https://github.com/filiksyos?tab=repositories"
                        aria-label="View Other Projects">
                        <span className='hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-in group-hover:translate-x-0 group-hover:opacity-100 md:inline'>
                            View All Projects
                        </span>
                        <span>
                            <FaArrowRight className='-rotate-45 transition-transform duration-300 group-hover:rotate-0' />
                        </span>
                    </Anchor>
                </div>
            </div>
        </Card>
    );
}