import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const COMMUNITY = {
  tabs: [
    { title: 'База знань', active: false },
    { title: 'Інформація', active: true },
  ],
  img: {
    src: '/img/com__img.png',
  },
  info: {
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
  },
  button: "Перейти до ком'юніті у Телеграм",
}

const createCommunity = () => {
  const community = createElement('main', 'community')

  const communityTab = createElement(
    'div',
    'community__tab',
  )

  COMMUNITY.tabs.forEach((value) => {
    const button = createElement(
      'button',
      value.active
        ? 'button community__tab-button active'
        : 'button community__tab-button',
      value.title,
    )
    communityTab.append(button)
  })

  community.append(communityTab)

  const communityMain = createElement(
    'div',
    'community__main',
  )

  const img = createElement('img')
  img.src = COMMUNITY.img.src

  communityMain.append(img)

  const communityInfo = createElement(
    'section',
    'community__info',
  )

  const communityInfoTitle = createElement(
    'h2',
    'community__info--title',
    COMMUNITY.info.title,
  )

  const communityInfoText = createElement(
    'p',
    'community__info--text',
    COMMUNITY.info.text,
  )

  communityInfo.append(
    communityInfoTitle,
    communityInfoText,
  )

  communityMain.append(communityInfo)

  const communityButton = createElement(
    'button',
    'button community__button',
    COMMUNITY.button,
  )

  communityMain.append(communityButton)

  community.append(communityMain)

  return community
}

const community = createCommunity()
page.append(community)
