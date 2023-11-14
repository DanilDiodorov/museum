'use client'

import Link from 'next/link'
import MainLayout from './components/layout'
import { Block, ImageBlock, List, ListItem, Title } from './components/text'
import choroon from './assets/choroon.jpg'
import lenin from './assets/lenin.jpg'
import kubok from './assets/kubok.jpg'
import kubok2 from './assets/kubok2.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { LiaCitySolid } from 'react-icons/lia'
import { AiOutlinePhone } from 'react-icons/ai'

const Page = () => {
    return (
        <MainLayout>
            <main
                className="lg:grid gap-7 bg-primary flex flex-col"
                style={{ gridTemplateColumns: '10fr 4fr' }}
            >
                <div className="bg-white p-8 flex flex-col gap-7">
                    <Title>Музей истории МКОУ СОШ №7</Title>
                    <Block>
                        В 2023-2024 учебном году нашей школе исполняется 95 лет.
                        За много лет накопился большой фонд архивных материалов,
                        экспонатов, которые необходимо сохранить, изучить,
                        систематизировать. Назрела необходимость создать
                        школьный музей истории школы. Для этого предстоит
                        большая работа по паспортизации музея, по работе с
                        фондами, необходимо приобрести оборудование, мебель,
                        подготовить план работы музея, программу развития музея.
                        Всё это будет сделано с целью создания оптимальных
                        условий по использованию ресурсов музея, средств
                        музейной педагогики по развитию личности в
                        учебно-воспитательном процессе.
                    </Block>
                    <ImageBlock src={choroon} />
                    <Block>
                        Содержание фондов, которые необходимо собрать и
                        подготовить для экспозиций:
                    </Block>
                    <List>
                        <ListItem>
                            Технические средства обучения 60-90-х годов;
                        </ListItem>
                        <ListItem>Коллекция фотографий с 40-х годов;</ListItem>
                        <ListItem>Коллекция альбомов выпускников;</ListItem>
                        <ListItem>
                            Коллекция атрибутов и символов пионерской
                            организации;
                        </ListItem>
                        <ListItem>
                            Коллекция призов за спортивные достижения; за
                            танцевальные конкурсы;
                        </ListItem>
                        <ListItem>
                            Коллекция сувениров-подарков, сделанные выпускниками
                            школы;
                        </ListItem>
                        <ListItem>
                            Коллекция школьной формы и школьных принадлежностей;
                        </ListItem>
                        <ListItem>
                            Письменные материалы: печатные издания в виде
                            журналов, газет, книг;
                        </ListItem>
                        <ListItem>Фонотека: коллекция пластинок;</ListItem>
                        <ListItem>
                            Документы: аттестаты, комсомольские билеты,
                            профсоюзные билеты, партийный билет, удостоверения
                            итд
                        </ListItem>
                        <ListItem>Другие экспонаты</ListItem>
                    </List>
                    <ImageBlock src={lenin} />
                    <Block>Стенды в школьном музее:</Block>
                    <Block>1 раздел - «Школа вчера» </Block>
                    <List>
                        <ListItem>
                            «Тихон Михайлович Софронов – основатель школы»;{' '}
                        </ListItem>
                        <ListItem>«Семён Власович Охлопков»; </ListItem>
                        <ListItem>«Наши учителя»; </ListItem>
                        <ListItem>«Директора школы»; </ListItem>
                    </List>
                    <ImageBlock src={kubok2} />
                    <Block>2 раздел - «Школа сегодня!»</Block>
                    <List>
                        <ListItem>«Выпускники школы»; </ListItem>
                        <ListItem>«Учитель перед именем твоим…»; </ListItem>
                        <ListItem>
                            Народный танцевальный коллектив «Биракан»;{' '}
                        </ListItem>
                        <ListItem>«Ими гордится наша школа»;</ListItem>
                        <ListItem>
                            «Педагогическая династия Охлопковых»;
                        </ListItem>
                        <ListItem>
                            «Педагогическая династия Софроновых».
                        </ListItem>
                    </List>
                    <ImageBlock src={kubok} />
                    <Block>
                        Для удобства и эффективности работы создан электронный
                        банк материалов деятельности музея. Создан официальный
                        сайт музея, который будет постоянно обновляться и
                        обеспечит более современную подачу информации для
                        пользователей интернет ресурсов. Также в работе музея
                        применяются ИКТ-технологии (составление презентаций,
                        мультимедийный показ, интернет ресурсное обеспечение)
                    </Block>
                    <Block>
                        Большую роль в изучении истории нашей школы сыграли два
                        больших труда коллег, которые много лет работали в нашей
                        школе. Это мемуары «О людях, о времени, о себе» Семёна
                        Власовича Охлопкова, где он увлекательно написал
                        воспоминания о работе в школе, о своих коллегах, об
                        учениках и о времени, в котором он жил и работал.
                    </Block>
                    <Block>
                        Вторая работа так и называется: «История Кутанинской
                        средней школы Алданского района» историка нашей школы
                        Дормидонтова Владимира Михайловича, который написал свою
                        работу, опираясь на архивные документы и факты.
                    </Block>
                </div>
                <div className="">
                    <div className="bg-white h-[200px] p-5">
                        <div className="flex items-center gap-4">
                            <LiaCitySolid className="text-grey text-lg" />
                            <div>
                                678916 РС(Я), Алданский р-н, с. Кутана, ул.
                                Алданская д. 27
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <AiOutlinePhone className="text-grey text-lg" />
                            <div>8 (41145) 76-3-63 факс 8 (41145) 76-2-37</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <AiOutlineMail className="text-grey text-lg" />
                            <div>kutana@list.ru</div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}

export default Page
