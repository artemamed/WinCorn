import React from "react";
import { FiShield, FiUsers, FiLink, FiFileText } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="p-10 rounded-lg shadow-lg max-w-4xl mx-auto m-[5rem]">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
        Privacy Policy
      </h1>

      <p className="mb-4 text-gray-700">
        Our Service may give You the ability to delete certain information about
        You from within the Service. You may update, amend, or delete Your
        information at any time by signing in to Your Account, if you have one,
        and visiting the account settings section that allows you to manage Your
        personal information. You may also contact Us to request access to,
        correct, or delete any personal information that You have provided to
        Us.
      </p>
      <p className="mb-4 text-gray-700">
        Please note, however, that We may need to retain certain information
        when we have a legal obligation or lawful basis to do so.
      </p>

      <section className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold mb-4">
          <FiFileText className="inline-block mr-2 text-green-600" size={24} /> 
          Disclosure of Your Personal Data
        </h2>
        <p className="mb-4 text-gray-700">
          <FiUsers className="inline-block mr-2 text-gray-600" size={24} />
          Business Transactions: If the Company is involved in a merger,
          acquisition, or asset sale, Your Personal Data may be transferred. We
          will provide notice before Your Personal Data is transferred and
          becomes subject to a different Privacy Policy.
        </p>
        <p className="mb-4 text-gray-700">
          <FiShield className="inline-block mr-2 text-gray-600" size={24} />
          Law enforcement: Under certain circumstances, the Company may be
          required to disclose Your Personal Data if required to do so by law or
          in response to valid requests by public authorities (e.g., a court or a
          government agency).
        </p>
        <p className="mb-4 text-gray-700">
          <FiShield className="inline-block mr-2 text-gray-600" size={24} />
          Other legal requirements: The Company may disclose Your Personal Data
          in the good faith belief that such action is necessary to:
        </p>
        <ul className="list-disc ml-8 mb-4 text-gray-700">
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of Users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
      </section>

      <section className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold mb-4">
          <FiShield className="inline-block mr-2 text-green-600" size={24} />
          Security of Your Personal Data
        </h2>
        <p className="mb-4 text-gray-700">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>
      </section>

      <section className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold mb-4">
          <FiUsers className="inline-block mr-2 text-green-600" size={24} />
          Children&apos;s Privacy
        </h2>
        <p className="mb-4 text-gray-700">
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          If We become aware that We have collected Personal Data from anyone
          under the age of 13 without verification of parental consent, We take
          steps to remove that information from Our servers.
        </p>
        <p className="mb-4 text-gray-700">
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent&apos;s consent before We collect and use that
          information.
        </p>
      </section>

      <section className="mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold mb-4">
          <FiLink className="inline-block mr-2 text-green-600" size={24} />
          Links to Other Websites
        </h2>
        <p className="mb-4 text-gray-700">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third-party link, You will be directed to
          that third party&apos;s site. We strongly advise You to review the Privacy
          Policy of every site You visit. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          <FiFileText className="inline-block mr-2 text-green-600" size={24} />
          Changes to this Privacy Policy
        </h2>
        <p className="mb-4 text-gray-700">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page. We will
          let You know via email and/or a prominent notice on Our Service, prior
          to the change becoming effective and update the &quot;Last updated&quot; date at
          the top of this Privacy Policy. You are advised to review this Privacy
          Policy periodically for any changes. Changes to this Privacy Policy
          are effective when they are posted on this page.
        </p>
      </section>

      <footer className="bg-gray-200 py-4 text-center rounded-lg">
        <p className="text-sm text-gray-700">
          <a
            href="mailto:sales@artemamed.com"
            className="text-green-500 hover:underline"
          >
            sales@artemamed.com
          </a>
          <br />
          +(92)4232361469
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
