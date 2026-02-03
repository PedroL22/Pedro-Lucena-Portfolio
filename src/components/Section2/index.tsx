import { Grid1 } from './Grid1'
import { Grid2 } from './Grid2'
import { Grid3 } from './Grid3'

export const Section2 = () => {
  return (
    <section className='mb-[10vh] overflow-hidden' id='section2'>
      <div className='mx-auto h-min w-[90vw] rounded-[50px] bg-gradient-to-br from-tertiary to-secondary 2xl:w-[45vw]'>
        <h1 className='block pt-[50px] text-center font-medium text-white'>Skills</h1>

        <p className='py-[15px] text-center font-normal text-text-muted normal-case'>What skills do I have?</p>

        <div className='mx-auto flex min-h-fit w-[90vw] justify-between pt-[40px] pb-[120px] max-[970px]:block max-[970px]:overflow-hidden max-[970px]:pt-[40px] max-[970px]:pb-[80px] 2xl:w-[45vw]'>
          <div className='mx-auto h-[350px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
            <Grid1 />
          </div>

          <div className='mx-auto h-[350px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
            <Grid2 />
          </div>

          <div className='mx-auto h-[350px] w-[400px] rounded-[25px] border-2 border-secondary bg-transparent text-center text-white transition-colors hover:bg-secondary max-[970px]:mb-[30px] max-[970px]:h-fit max-[970px]:w-[300px] max-[970px]:pb-[30px]'>
            <Grid3 />
          </div>
        </div>
      </div>
    </section>
  )
}
