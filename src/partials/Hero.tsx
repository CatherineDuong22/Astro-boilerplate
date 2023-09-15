import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Catherine</GradientText> 👋
        </>
      }
      description={
        <>
          An upcoming Statistics graduate from Texas A&M{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            , an aspring data scientist,
          </a>{' '}
          life-long learner, ping-pong player, singer. I have experiences
          interning at{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.linkedin.com/company/linkedin/mycompany/verification/"
          >
            LinkedIn, IBM, and Nissan
          </a>{' '}
          as Data Science/Data Analytics intern.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/catherine-22/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
