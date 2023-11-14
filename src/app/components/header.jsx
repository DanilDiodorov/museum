import logo from './assets/logo.jpg'
import Image from 'next/image'
import { DropDown, DropDownItem, Menu, MenuItem } from './menu'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [active, setActive] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            console.log(window.innerWidth)
            if (!active) setActive(true)
        } else {
            if (active) setActive(false)
        }
        setTimeout(() => {
            menuRef.current.style.opacity = 1
            menuRef.current.style.position = 'relative'

            setTimeout(() => {
                menuRef.current.style.transition = 'all 0.5s ease-in-out'
            }, 100)
        }, 100)
        window.removeEventListener('resize', resizeHandler)

        window.addEventListener('resize', resizeHandler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        menuRef.current.style.marginTop = active
            ? 0
            : -menuRef.current.offsetHeight + 'px'

        window.removeEventListener('resize', resizeHandler)

        window.addEventListener('resize', resizeHandler)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])

    const resizeHandler = () => {
        if (window.innerWidth >= 1024) {
            if (!active) setActive(true)
        } else {
            if (active) setActive(false)
        }
    }

    return (
        <header className="z-10 overflow-hidden lg:overflow-visible">
            <div className="bg-white relative z-10 w-full">
                <div className="bg-white py-3 flex lg:container md:container m-auto items-center justify-between z-10 relative">
                    <div className="flex justify-center items-center gap-3 lg:ml-0 md:ml-0 ml-5 ">
                        <Image
                            src={logo}
                            alt="logo"
                            className="lg:w-24 md:w-18 w-14 z-0"
                        />
                        <div className="uppercase text-sm lg:text-lg md:text-lg font-bold text-secondary">
                            <p>Музей истории</p>
                            <p>МКОУ СОШ №7</p>
                        </div>
                    </div>
                    <div
                        className="flex lg:hidden hover:cursor-pointer lg:mr-0 md:mr-0 mr-8 flex-col justify-between w-10 h-7"
                        onClick={() => setActive(!active)}
                    >
                        <div
                            className={`h-1 rounded-sm bg-grey transition-all duration-500 ${
                                active
                                    ? 'rotate-45 translate-y-3'
                                    : 'rotate-0 translate-y-0'
                            }`}
                        ></div>
                        <div
                            className={`h-1 rounded-sm bg-grey transition-all duration-500 ${
                                active ? ' opacity-0' : 'opacity-1'
                            }`}
                        ></div>
                        <div
                            className={`h-1 rounded-sm bg-grey transition-all duration-500 ${
                                active
                                    ? '-rotate-45 -translate-y-3'
                                    : '-rotate-0 -translate-y-0'
                            }`}
                        ></div>
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`bg-secondary text-white flex lg:justify-center opacity-0 absolute lg:mt-0`}
            >
                <Menu>
                    <MenuItem href="/">Главная</MenuItem>
                    <DropDown title="История школы">
                        <DropDownItem href="/pdf/letopis">
                            Летопись школы
                        </DropDownItem>
                        <DropDownItem href="/pdf/sofronov">
                            Софронов Тихон Михайлович
                        </DropDownItem>
                        <DropDownItem href="/pdf/dormidontov">
                            Дормидонтов Владимир Михайлович
                        </DropDownItem>
                        <DropDownItem href="/pdf/okhlopkov">
                            Охлопков Семён Власович
                        </DropDownItem>
                    </DropDown>
                    <DropDown title="История в лицах">
                        <DropDownItem href="/pdf/dormidontov-history-in-faces">
                            Дормидонтов Владимир Михайлович
                        </DropDownItem>
                        <DropDownItem href="/pdf/sofronov-history-in-faces">
                            Софронов Тихон Михайлович
                        </DropDownItem>
                        <DropDownItem href="/pdf/okhlopkov-history-in-faces">
                            Охлопков Семён Власович
                        </DropDownItem>
                        <DropDownItem href="/pdf/nesterev-history-in-faces">
                            Нестеров Емельян Кириллович
                        </DropDownItem>
                    </DropDown>
                    <DropDown title="Вот так мы живём">
                        <DropDownItem href="/clips/2023">
                            Вот так мы живём 2023 год
                        </DropDownItem>
                    </DropDown>
                    <MenuItem href="/graduates">Список выпускников</MenuItem>
                </Menu>
            </div>
        </header>
    )
}

export default Header
