import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/molecules/LoginForm.vue'
import sinon from 'sinon'

describe('LoginForm.vue', () => {
  it('ボタンを押下時にhandleメソッドが実行されること', () => {
    const spyHandle = jest.spyOn(LoginForm.methods, 'handle');
    const wrapper = shallowMount(LoginForm, {
      props: { login: () => {} },
    });

    wrapper.find('button').trigger('click')
    expect(spyHandle).toHaveBeenCalled()
  })
  it('ボタン押下時にloginプロップが呼ばれることを確認', () => {
    const spy = sinon.spy() 
    const wrapper = shallowMount(LoginForm, {
      props: {
        login: spy
      }
    })

    wrapper.find('button').trigger('click')
    expect(spy.called).toBe(true)
  })
})
