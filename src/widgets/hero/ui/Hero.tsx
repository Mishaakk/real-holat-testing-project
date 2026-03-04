import { Button } from '../../../shared/ui'

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-8 py-15 md:py-20 animate-[fadeUp_0.5s_ease_both]">
      {/* <h1 className="text-[clamp(28px,4vw,46px)] font-black leading-[1.2] text-[#666] max-w-[640px]">
        Siz hududingizdagi muammolar{' '}
        <span className="text-[#111]">haqida ma'lumot qoldiring,</span>
      </h1> */}
      <h1 className="text-[clamp(28px,4vw,56px)] max-w-[980px] font-black leading-[1.2] bg-[image:var(--gd-grey)] bg-clip-text text-transparent">
        Siz hududingizdagi muammolar haqida ma'lumot qoldiring,
      </h1>

      <p className="mt-5 text-[28px] text-[var(--grey)] font-medium">
        Biz uni hal qilishga yordam beramiz.
      </p>

      <div className="mt-8 flex flex-col items-center gap-[24px]">
        <Button variant="green" size="lg" className="min-w-[240px] py-3">
          Ma'lumot qoldirish
        </Button>
        <Button variant="purple" size="lg" className="min-w-[160px]">
          Natijalar
        </Button>
      </div>
    </section>
  )
}
