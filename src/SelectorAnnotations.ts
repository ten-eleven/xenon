import {Component} from "./index"
import {CSSSelector} from "./Selectors";

var initBuilder = function(target:any, propKey) {
  target._builders = target._builders || {}
  target._builders[propKey] = target._builders[propKey] || {}
  return target._builders[propKey]
}

function createAnnotation<T>(field) {
  return function(param:T){
    return function(target:any, propKey:string) {      
      var annotation = initBuilder(target, propKey)
      annotation[field] = param
    }
  }
}
export var css = createAnnotation<string>("css")
export var qa = createAnnotation<string>("qa")
export var state = createAnnotation<any>("state")
