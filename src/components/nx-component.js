import Vue from "vue";
import NxAutowirer from "../components/NxAutowirer";
import { cond, isNil, constant, T, curry } from "lodash/fp";

export default function(component) {
  return {
    beforeCreate() {
      const NxAutowirerClass = Vue.extend(NxAutowirer);
      const nxAutowirer = findParent(NxAutowirerClass, this);

      if (nxAutowirer) {
        this._nxAutowirer = nxAutowirer;
      } else {
        throw new Error("Could not find NxAutowirer");
      }
    },
    render() {
      const nxAutowirer = this._nxAutowirer;
      const Component = Vue.extend(component);

      return (
        <Component
          {...{
            attrs: nxAutowirer.$attrs,
            on: nxAutowirer.$listeners,
            scopedSlots: this.$scopedSlots,
          }}
        ></Component>
      );
    },
  };
}

const instanceOf = curry((clazz, instance) => instance instanceof clazz);

const findParent = (parentClass, vm) =>
  cond([
    [isNil, constant(null)],
    [instanceOf(parentClass), constant(vm)],
    [T, () => findParent(parentClass, vm.$parent)],
  ])(vm);
