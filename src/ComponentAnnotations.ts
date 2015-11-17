import {Component} from "./index"
import {CSSSelector} from "./Selectors";

var initBuilder = function(target:any, propKey) {
  target._builders = target._builders || {}
  target._builders[propKey] = target._builders[propKey] || {}
  return target._builders[propKey]
}

export interface FieldOptions {
  css?:string
  qa?:string
  state?:Object
}
type ComponentClass = {new(component:Component):Component}
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
