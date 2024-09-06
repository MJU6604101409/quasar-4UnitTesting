

//describe('IndexPage', () => {
//  it('should render correct contents', () => {
//    const wrapper = shallowMount(IndexPage)
//    let header = wrapper.find('.htmlClass h1')
//    expect(header.exists()).toBe(true)
//    expect(header.text())
//    .toBe('ฉันรักเขา')
//  })
//})

//it('ตรวจสอบตัวแปรชื่อว่า title', () => {
//  const wrapper = shallowMount(IndexPage, {
//    data () {
//      return {
//       title: 'ฉันรักเขา'
//      }
//    }
//  })
//let header = wrapper.find('.htmlClass h1')
//  expect(header.text()).toBe('ฉันรักเขา')
//})

  // test('ทดสอบว่ามีฟอร์ม (from)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('form').exists()).toBe(true)
  // })

  // test('ทดสอบว่าในฟอร์ม (from) มีการรับค่า (input)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('form > input').exists()).toBe(true)
  // })


  // test('ทดสอบว่ามีปุ่ม (button)', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   expect(wrapper.find('button').exists()).toBe(true)
  // })

  // test('ทดสอบว่าในฟอร์ม (from) มีรหัสนักศึกษา', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   let Divtest = wrapper.find('.htmlClass div')
  //   expect(Divtest.text()).toBe('6604101385')
  // })
  import { shallowMount } from '@vue/test-utils';
  import IndexPage from 'src\pages\IndexPage.vue';

  it('ตรวจสอบตัวแปร codestudent', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          codestudent: '6604101409'
        };
      }
    });
    let divtest = wrapper.find('.htmlClass div');
    expect(divtest.text()).toBe('6604101409');
  });

  it('ตรวจสอบตัวแปร firstName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          firstName: 'Jetsadaporn'
        };
      }
    });
    let p1test = wrapper.find('.htmlClass p').at(0);
    expect(p1test.text()).toBe('Jetsadaporn');
  });

  it('ตรวจสอบตัวแปร lastName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          lastName: 'Chaiwong'
        };
      }
    });
    let p2test = wrapper.find('.htmlClass p').at(1);
    expect(p2test.text()).toBe('Chaiwong');
  });

  it('ตรวจสอบตัวแปร nickName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          nickName: 'Kongfilm'
        };
      }
    });
    let p3test = wrapper.find('.htmlClass p').at(2);
    expect(p3test.text()).toBe('Kongfilm');
  });
