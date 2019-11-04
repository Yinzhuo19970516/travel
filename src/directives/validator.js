// 具体的验证逻辑
function validate(el, modifiers, bindingValue) {}

// 显示或隐藏错误提示元素
function showError(el, error) {}

// 创建或者返回一个错误提示元素
function getErrorElement(el) {}

export default {
  bind(el, binding, vnode) {
    // 使用解构赋值声明 value = binding.value,  arg = binding.arg,  modifiers = binding.modifiers
    const { value, arg, modifiers } = binding
    // 如果没传对应的事件名称参数，就默认使用 change 事件
    const eventType = ['change', 'blur', 'input'].indexOf(arg) !== -1 ? arg : 'change'
    // 默认处理器，当用户开始输入时，移除错误提示
    const defaultHandler = () => {
      showError(el)
    }
    // 验证处理器，当用户触发对应的事件时，验证用户输入的信息
    const handler = () => {
      validate(el, modifiers, value)
    }

    // 在 el 元素上的添加 input 事件监听
    el.addEventListener('input', defaultHandler, false)
    // 在 el 元素上的添加用户指定的事件监听
    el.addEventListener(eventType, handler, false)

    // 移除 el 元素上事件监听和数据绑定的方法
    el.destroy = () => {
      el.removeEventListener('input', defaultHandler, false)
      el.removeEventListener(eventType, handler, false)
      el.destroy = null
    }
  },
  inserted(el, binding, vnode) {
    const { value, modifiers } = binding
    // 指定当前一系列验证项的父级，我们这里指定为含 data-validator-form 的元素
    const form = el.closest('[data-validator-form]')
    // 指定一个按钮来检查所有验证项，我们这里指定为含 type=submit 的元素
    const submitBtn = form ? form.querySelector('[type=submit]') : null

    if (submitBtn) {
      // 提交处理器
      const submitHandler = () => {
        // 验证所有项
        validate(el, modifiers, value)

        // 获取错误信息
        const errors = form.querySelectorAll('.has-error')

        if (!errors.length) {
          // 没有错误信息时，在按钮上添加一个 canSubmit 属性，并指定为 true
          submitBtn.canSubmit = true
        } else {
          // 有错误信息时，在按钮上添加一个 canSubmit 属性，并指定为 false
          submitBtn.canSubmit = false
        }
      }

      // 在按钮上的添加 click 事件监听
      submitBtn.addEventListener('click', submitHandler, false)

      // 移除按钮上事件监听和数据绑定的方法
      el.destroySubmitBtn = () => {
        submitBtn.removeEventListener('click', submitHandler, false)
        el.destroySubmitBtn = null
      }
    }
  },
  unbind(el) {
    // 移除事件监听和数据绑定
    el.destroy()
    if (el.destroySubmitBtn) el.destroySubmitBtn()
  }
}
