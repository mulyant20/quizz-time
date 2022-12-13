import { Setting as SettingInterface } from '../../interface/setting'
import { Layout } from '../../components'

export default function Setting({
  duration,
  theme,
  totalQuestion,
}: SettingInterface) {
  return <Layout>
    <div className='h-screen flex justify-center'>
      <p className='text-3xl mt-12'>Work in Progress</p>
    </div>
  </Layout>
}
