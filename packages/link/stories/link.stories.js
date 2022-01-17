import WzjLink from '../src/link.vue'

export default {
  title: 'WzjLink',
  component: WzjLink
}

export const Link = _ => ({
  components: { WzjLink },
  template: `
    <div>
      <wzj-link :disabled="true" href="http://www.baidu.com">百度</wzj-link>
    </div>
  `
})
