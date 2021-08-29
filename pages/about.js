import Hed from '@components/Hed'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as t from '../public/locales/en/common'

export default function About() {
  return (
    <div className="container">
      <Hed title={t['title']} />
      <Header 
        title="When To Chat" 
        subtitle="Reconcile Time Zone differences, so that chatting is easy"
      />
      <main className="about">
        <h1>About</h1>
        <p>
          Finding the right time to chat with friends in different time-zones can be a hassle. I consistently deal with the tedium of calculating the ideal time overlap. It simply shouldn't be that much of a headache! The goal of <em>When To Chat</em> is to help with that.
        </p>
        <p>
          This app was written with <a href="https://nextjs.org/">Nextjs</a> and deployed with <a href="https://www.netlify.com/"><img className="netlify" src="/netlify.png"></img></a>
        </p>
        <p>
          If you have any questions, suggestions, or if you've found a bug then <a href='https://nathanwillson.com/'>send me an email</a> or message on Twitter.
        </p>
        <ul>
          <li>[2018.12] <em>When To Chat</em> released</li>
          <li>[2019.12] <em>When To Chat</em> for Slack released</li>
          <li>[2021.04] <em>When To Chat</em> re-released with improvements</li>
        </ul>
      </main>
      <Footer
        title={t['title']} 
        twitter={t['twitter']}
      />
    </div>
  )
}
