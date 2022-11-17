import HelloWorld from './HelloWorld.vue'

const CustomComponents = {
  // Add your custom components here
  Hello: HelloWorld
}

// install component to Vue
export const installComponent = (app: any) => {
  if (Object.keys(CustomComponents).length > 0) {
    Object.keys(CustomComponents).forEach((key) => {
      app.component(key, CustomComponents[key as keyof typeof CustomComponents])
    })
  }
}
// register global component
export const rootComponentsGlobal = [HelloWorld]
