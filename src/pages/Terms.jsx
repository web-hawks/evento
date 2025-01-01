import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

const Terms = () => {
  return (
    <>
      <PageTitle title='Terms and Conditions' />
      <div className='min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl'>
          <h1 className='mb-8 text-center text-3xl font-extrabold text-gray-900'>
            Terms and Conditions
          </h1>

          <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
            <div className='px-4 py-5 sm:p-6'>
              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                1. Acceptance of Terms
              </h2>
              <p className='mb-4 text-gray-700'>
                By accessing and using our event management platform, you agree
                to be bound by these Terms and Conditions, all applicable laws
                and regulations, and agree that you are responsible for
                compliance with any applicable local laws.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                2. Use License
              </h2>
              <p className='mb-4 text-gray-700'>
                Permission is granted to temporarily use this platform for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className='mb-4 list-inside list-disc space-y-2 text-gray-700'>
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose;</li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on the platform;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or &quot;mirror&quot;
                  the materials on any other server.
                </li>
              </ul>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                3. Event Creation and Management
              </h2>
              <p className='mb-4 text-gray-700'>
                Users are responsible for the accuracy of information provided
                when creating and managing events. We reserve the right to
                remove events that violate our policies or are deemed
                inappropriate.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                4. Payment and Refunds
              </h2>
              <p className='mb-4 text-gray-700'>
                All payments are processed securely through our platform. Refund
                policies are set by event organizers and we are not responsible
                for issuing refunds unless required by law.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                5. Limitation of Liability
              </h2>
              <p className='mb-4 text-gray-700'>
                We shall not be held liable for any direct, indirect,
                incidental, consequential or punitive damages arising out of
                your use of the platform or attendance at events organized
                through the platform.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                6. Privacy Policy
              </h2>
              <p className='mb-4 text-gray-700'>
                Your use of the platform is also governed by our Privacy Policy.
                Please review our Privacy Policy, which also governs the
                platform and informs users of our data collection practices.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                7. Governing Law
              </h2>
              <p className='mb-4 text-gray-700'>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction] and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that State or location.
              </p>

              <h2 className='mb-4 text-xl font-semibold text-gray-900'>
                8. Changes to Terms
              </h2>
              <p className='mb-4 text-gray-700'>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will provide at least 30 days&apos; notice prior to any new
                terms taking effect.
              </p>

              <div className='mt-8 text-center'>
                <Link
                  to='/'
                  className='text-primary hover:underline'
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
