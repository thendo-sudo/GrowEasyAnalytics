import { useForm } from 'react-hook-form';
import { useState } from 'react';

type TechStack = {
  frontendFramework: string;
  backendFramework: string;
  database: string;
  apiType: string;
  cloudProvider: string;
  ciCdTool: string;
  monitoringTool: string;
  authProvider: string;
  environment: string;
  versionControl: string;
  notes: string;
};

export default function TechStackForm() {
  const { register, handleSubmit, reset } = useForm<TechStack>({
    defaultValues: {
      frontendFramework: '',
      backendFramework: '',
      database: '',
      apiType: '',
      cloudProvider: '',
      ciCdTool: '',
      monitoringTool: '',
      authProvider: '',
      environment: '',
      versionControl: '',
      notes: '',
    },
  });
  const [submittedData, setSubmittedData] = useState<TechStack | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: TechStack) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== '')
    );
    if (Object.keys(filteredData).length === 0) {
      setError('Please fill at least one field');
      setSuccess(null);
      setSubmittedData(null);
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/tech-stack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filteredData),
      });
      if (response.ok) {
        setSuccess('Submitted successfully!');
        setSubmittedData(filteredData as TechStack);
        setError(null);
        console.log('Submitted:', filteredData);
        reset();
        window.dispatchEvent(new Event('stackSubmitted'));
      } else {
        throw new Error('Failed to save');
      }
    } catch (err) {
      setError('Error saving data');
      setSuccess(null);
      setSubmittedData(null);
      console.error(err);
    }
  };

  const handleReset = () => {
    reset();
    setSuccess(null);
    setSubmittedData(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Share Your Tech Stack</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-base font-medium text-gray-700">
              Frontend Framework
            </label>
            <input
              type="text"
              {...register('frontendFramework')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., React, Vue, Angular, Svelte"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Backend Framework
            </label>
            <input
              type="text"
              {...register('backendFramework')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., Express, Django, Spring, Laravel"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Database
            </label>
            <input
              type="text"
              {...register('database')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., PostgreSQL, MongoDB, MySQL, SQLite"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              API Type
            </label>
            <input
              type="text"
              {...register('apiType')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., REST, GraphQL, SOAP"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Cloud Provider
            </label>
            <input
              type="text"
              {...register('cloudProvider')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., AWS, Azure, GCP"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              CI/CD Tool
            </label>
            <input
              type="text"
              {...register('ciCdTool')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., GitHub Actions, Jenkins, CircleCI"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Monitoring Tool
            </label>
            <input
              type="text"
              {...register('monitoringTool')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., Datadog, New Relic, Prometheus"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Auth Provider
            </label>
            <input
              type="text"
              {...register('authProvider')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., Auth0, Firebase, Okta"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Environment
            </label>
            <input
              type="text"
              {...register('environment')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., Development, Staging, Production"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Version Control
            </label>
            <input
              type="text"
              {...register('versionControl')}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-4"
              placeholder="e.g., GitHub, GitLab, Bitbucket"
            />
          </div>
          <hr className="md:col-span-2 my-6 border-gray-300" />
          <div className="md:col-span-2">
            <label className="block text-base font-medium text-gray-700">
              Challenges with Current Tech Stack
            </label>
            <textarea
              {...register('notes')}
              placeholder="Describe any problems or challenges you'd like solved (e.g., slow performance, scalability issues)"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-4 min-h-[120px]"
            />
          </div>
          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-400"
            >
              Reset
            </button>
          </div>
        </form>
        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            <p className="font-semibold">{success}</p>
            {submittedData && (
              <ul className="list-disc pl-5 mt-2">
                {submittedData.frontendFramework && (
                  <li>Frontend: {submittedData.frontendFramework}</li>
                )}
                {submittedData.backendFramework && (
                  <li>Backend: {submittedData.backendFramework}</li>
                )}
                {submittedData.database && (
                  <li>Database: {submittedData.database}</li>
                )}
                {submittedData.apiType && <li>API: {submittedData.apiType}</li>}
                {submittedData.cloudProvider && (
                  <li>Cloud: {submittedData.cloudProvider}</li>
                )}
                {submittedData.ciCdTool && (
                  <li>CI/CD: {submittedData.ciCdTool}</li>
                )}
                {submittedData.monitoringTool && (
                  <li>Monitoring: {submittedData.monitoringTool}</li>
                )}
                {submittedData.authProvider && (
                  <li>Auth: {submittedData.authProvider}</li>
                )}
                {submittedData.environment && (
                  <li>Environment: {submittedData.environment}</li>
                )}
                {submittedData.versionControl && (
                  <li>Version Control: {submittedData.versionControl}</li>
                )}
                {submittedData.notes && (
                  <li>Challenges: {submittedData.notes}</li>
                )}
              </ul>
            )}
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}