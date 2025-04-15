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
      setError('Please select at least one field');
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
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-base font-medium text-gray-700">
            Frontend Framework
          </label>
          <select
            {...register('frontendFramework')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Backend Framework
          </label>
          <select
            {...register('backendFramework')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="express">Express</option>
            <option value="django">Django</option>
            <option value="spring">Spring</option>
            <option value="laravel">Laravel</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Database
          </label>
          <select
            {...register('database')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="postgresql">PostgreSQL</option>
            <option value="mongodb">MongoDB</option>
            <option value="mysql">MySQL</option>
            <option value="sqlite">SQLite</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            API Type
          </label>
          <select
            {...register('apiType')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="rest">REST</option>
            <option value="graphql">GraphQL</option>
            <option value="soap">SOAP</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Cloud Provider
          </label>
          <select
            {...register('cloudProvider')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="aws">AWS</option>
            <option value="azure">Azure</option>
            <option value="gcp">GCP</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            CI/CD Tool
          </label>
          <select
            {...register('ciCdTool')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="github-actions">GitHub Actions</option>
            <option value="jenkins">Jenkins</option>
            <option value="circleci">CircleCI</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Monitoring Tool
          </label>
          <select
            {...register('monitoringTool')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="datadog">Datadog</option>
            <option value="new-relic">New Relic</option>
            <option value="prometheus">Prometheus</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Auth Provider
          </label>
          <select
            {...register('authProvider')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="auth0">Auth0</option>
            <option value="firebase">Firebase</option>
            <option value="okta">Okta</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Environment
          </label>
          <select
            {...register('environment')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">
            Version Control
          </label>
          <select
            {...register('versionControl')}
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="">None</option>
            <option value="github">GitHub</option>
            <option value="gitlab">GitLab</option>
            <option value="bitbucket">Bitbucket</option>
          </select>
        </div>
        <hr className="md:col-span-2 my-4 border-gray-300" />
        <div className="md:col-span-2">
          <label className="block text-base font-medium text-gray-700">
            Challenges with Current Tech Stack
          </label>
          <textarea
            {...register('notes')}
            placeholder="Describe any problems or challenges you'd like solved (e.g., slow performance, scalability issues)"
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm p-2 min-h-[100px]"
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
  );
}