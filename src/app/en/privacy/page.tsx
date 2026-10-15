import type { Metadata } from "next";
import Link from "next/link";

import { ContactLink } from "@/components/ContactLink";
import { ControllerBlock } from "@/components/legal/ControllerBlock";
import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyEnPage() {
  return (
    <LegalPage
      lang="en"
      title="Privacy Policy"
      meta={
        <>
          Last updated: {formatDate(site.legalUpdatedAt, "en")} · <Link href="/privacy/">Türkçe</Link>
        </>
      }
    >
      <p>
        Fuluu (the “app”) is an English-learning app. This policy explains what data is processed, why,
        and what rights you have.
      </p>

      <h2>1. Controller</h2>
      <ControllerBlock contactLabel="Contact" />

      <h2>2. Data we collect</h2>
      <table>
        <thead>
          <tr><th>Data</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Email address (if you create an account)</td>
            <td>Sign-in with a one-time code and syncing progress across devices. No passwords are used.</td>
          </tr>
          <tr>
            <td>Language, target level, daily goal, learning purpose, placement result</td>
            <td>Personalizing your learning path.</td>
          </tr>
          <tr>
            <td>Progress: XP, streak, lesson and exercise results, mistake and review lists, hearts state, time zone</td>
            <td>Saving progress, scheduling reviews, running the hearts system.</td>
          </tr>
          <tr>
            <td>Exercises you report (exercise ID, your answer, the correct answer, reason, language, app version)</td>
            <td>Fixing wrong or unclear content.</td>
          </tr>
          <tr>
            <td>Crash and error reports (device model, OS and app version, stack trace)</td>
            <td>Keeping the app stable. Your speech and answers are never attached.</td>
          </tr>
        </tbody>
      </table>
      <p>You can use the app without an account; your progress then stays on your device only.</p>

      <h2>3. Microphone and speech recognition</h2>
      <p>
        Speaking exercises ask for microphone and speech-recognition permission. Audio is not sent to or
        stored on Fuluu servers. Your speech is converted to text by your device’s operating-system
        service (Apple on iOS, Google on Android), governed by that provider’s privacy policy. You can
        revoke the permission in device settings; only speaking exercises stop working.
      </p>

      <h2>4. Notifications</h2>
      <p>
        Daily reminders, if you allow them, are scheduled locally on your device. No device token is
        sent to a server.
      </p>

      <h2>5. Service providers</h2>
      <ul>
        <li><strong>Supabase</strong>: hosting of account, authentication and progress data.{site.supabaseRegion ? ` Server location: ${site.supabaseRegion}.` : null}</li>
        <li><strong>Sentry</strong>: crash and error reports, with personal data collection turned off.</li>
        <li><strong>Apple App Store / Google Play</strong>: distribution and (if offered) subscription payments. Fuluu cannot see your payment details.</li>
      </ul>
      <p>We do not sell your data, use it for advertising or tracking, or share it for marketing.</p>

      <h2>6. Retention</h2>
      <p>
        Data is kept while your account is open. When you delete your account, your profile, progress
        and activity records are permanently deleted. Crash reports are deleted automatically after a
        limited period.
      </p>

      <h2>7. Your rights and account deletion</h2>
      <p>
        You may access, correct and delete your data and object to its processing. Delete your account
        in the app under <em>Profile → Account → Delete account</em>; see{" "}
        <Link href="/delete-account/">Account Deletion</Link>. For other requests write to <ContactLink />.
      </p>

      <h2>8. Children</h2>
      <p>The app is not directed to children under 13 and we do not knowingly collect their data.</p>

      <h2>9. Changes</h2>
      <p>If this policy changes, the new date is published on this page.</p>
    </LegalPage>
  );
}
