import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CookiesPolicyPage() {
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cookies Policy", href: "/cookies" },
        ]}
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
          <p className="text-muted-foreground">Last updated: March 27, 2025</p>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            This Cookies Policy explains how Zafago ("we", "us", or "our") uses cookies and similar technologies to
            recognize you when you visit our website. It explains what these technologies are and why we use them, as
            well as your rights to control our use of them.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
            as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Zafago) are called "first-party cookies". Cookies set by
            parties other than the website owner are called "third-party cookies". Third-party cookies enable
            third-party features or functionality to be provided on or through the website (e.g., advertising,
            interactive content, and analytics). The parties that set these third-party cookies can recognize your
            computer both when it visits the website in question and also when it visits certain other websites.
          </p>

          <h2>Why do we use cookies?</h2>
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for technical
            reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary"
            cookies. Other cookies also enable us to track and target the interests of our users to enhance the
            experience on our website. Third parties serve cookies through our website for advertising, analytics, and
            other purposes. This is described in more detail below.
          </p>

          <h2>Types of cookies we use</h2>
          <p>
            The specific types of first and third-party cookies served through our website and the purposes they perform
            are described below:
          </p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website and to use
            some of its features, such as access to secure areas. Because these cookies are strictly necessary to
            deliver the website, you cannot refuse them without impacting how our website functions.
          </p>

          <h3>Performance and Functionality Cookies</h3>
          <p>
            These cookies are used to enhance the performance and functionality of our website but are non-essential to
            their use. However, without these cookies, certain functionality may become unavailable.
          </p>

          <h3>Analytics and Customization Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our
            website is being used or how effective our marketing campaigns are, or to help us customize our website for
            you in order to enhance your experience.
          </p>

          <h3>Advertising Cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some
            cases selecting advertisements that are based on your interests.
          </p>

          <h3>Social Media Cookies</h3>
          <p>
            These cookies are used to enable you to share pages and content that you find interesting on our website
            through third-party social networking and other websites. These cookies may also be used for advertising
            purposes.
          </p>

          <h2>How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            by clicking on the appropriate opt-out links provided in the cookie banner on our website.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
            cookies, you may still use our website though your access to some functionality and areas of our website may
            be restricted. As the means by which you can refuse cookies through your web browser controls vary from
            browser to browser, you should visit your browser's help menu for more information.
          </p>

          <h2>How often will we update this Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy
            regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

          <h2>Where can you get further information?</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at{" "}
            <a href="mailto:privacy@zafago.com">privacy@zafago.com</a>.
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
