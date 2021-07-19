import React, { useState, useEffect } from 'react'
import { alpacaConfig } from '../alpacaConfig'
import Buttons from './buttons'
import AlpacaArt from './alpacaArt'
import Actions from './actions'
import Controls from './Controls'
import Header from './Header'
import download from 'downloadjs'
import { getImage } from '../utils/getImage'
import { toPng } from 'html-to-image'
// import { randomize } from "../utils/randomize";

const Alpaca = () => {
  const [config, setConfig] = useState(alpacaConfig)
  const [bg, setBg] = useState(null)
  const [neck, setNeck] = useState(null)
  const [ears, setEars] = useState(null)
  const [hair, setHair] = useState(null)
  const [eyes, setEyes] = useState(null)
  const [leg, setLeg] = useState(null)
  const [mouth, setMouth] = useState(null)
  const [nose, setNose] = useState(null)
  const [accessories, setAccessories] = useState(null)
  const [feature, setFeature] = useState(config[0])

  const changeImage = (feature, attribute) => {
    const { directory: dir } = feature
    const { filename: bgImage } = attribute

    const configClone = [...config]
    const selectedFeatureIndex = configClone.indexOf(feature)
    const selectedAttrIndex = configClone[selectedFeatureIndex].items.indexOf(
      attribute
    )

    configClone[selectedFeatureIndex].items.forEach(
      attr => (attr.selected = false)
    )
    configClone[selectedFeatureIndex].items[selectedAttrIndex].selected = true

    setConfig(configClone)

    getImage(dir, bgImage, image => {
      switch (dir) {
        case 'backgrounds':
          setBg(image)
          break
        case 'neck':
          setNeck(image)
          break
        case 'nose':
          setNose(image)
          break
        case 'eyes':
          setEyes(image)
          break
        case 'ears':
          setEars(image)
          break
        case 'mouth':
          setMouth(image)
          break
        case 'leg':
          setLeg(image)
          break
        case 'hair':
          setHair(image)
          break
        case 'accessories':
          setAccessories(image)
          break
        default:
          break
      }
    })
  }

  const downloadImage = () => {
    const alpacaCanvasNode = document.getElementById('alpaca')
    toPng(alpacaCanvasNode).then(dataUrl => {
      download(dataUrl, 'my-alpaca.png')
    })
  }

  const randomizeImage = () => {
    // const randomAlpacaConfig = randomize();
    // console.log(randomAlpacaConfig);
    // setConfig(randomAlpacaConfig);
  }

  const setFeatureItem = feature => {
    const configClone = [...config]
    const selectedIndex = configClone.indexOf(feature)
    configClone.forEach(ft => (ft.selected = false))
    configClone[selectedIndex].selected = true
    setConfig(configClone)
    setFeature(feature)
  }

  useEffect(() => {
    const renderAlpaca = () => {
      config.forEach(feature => {
        const attribute = feature.items.filter(
          at => at.filename === 'default'
        )[0]
        changeImage(feature, attribute)
      })
    }
    renderAlpaca()
    // eslint-disable-next-line
  }, [])

  const alpacaAttr = {
    bg,
    neck,
    nose,
    mouth,
    eyes,
    hair,
    leg,
    ears,
    accessories
  }

  return (
    <div className='container'>
      <Header />
      <div className='inner'>
        <div className='left'>
          <div className='alpaca' id='alpaca'>
            <AlpacaArt attr={alpacaAttr} />
          </div>
          <Actions
            downloadImage={downloadImage}
            randomizeImage={randomizeImage}
          />
        </div>
        <div className='right'>
          <h2 className='heading'>Accessorize your Alpaca</h2>
          {config.map(attributes => (
            <Controls
              key={attributes.id}
              attributes={attributes}
              setFeatureItem={setFeatureItem}
            />
          ))}
          <hr />
          <Buttons
            key={feature.id}
            attributes={feature}
            changeImage={changeImage}
          />
        </div>
      </div>
    </div>
  )
}

export default Alpaca
