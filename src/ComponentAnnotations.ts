import {Component} from "./index"

var initBuilder = function(target:any, propKey) {
  target._builders = target._builders || {}
  target._builders[propKey] = target._builders[propKey] || {}
  return target._builders[propKey]
}

type ComponentClass = {new(component:Component):Component}

export interface ComponentOptions {
  css?:string
  qa?:string
  state?:Object
}

export interface FieldOptions extends ComponentOptions {
  itemQA?:string
  itemCSS?:string
  itemType?:ComponentClass
}

export function field(componentClass:ComponentClass, options:FieldOptions = {}){
  return function(target:any, propKey:string){
    var annotation = initBuilder(target, propKey)
    annotation.type = componentClass
    annotation.setters = options
  }
}

export function defaults(options:FieldOptions){
  return function(target:any){
    target.prototype.defaults = options
  }
}
