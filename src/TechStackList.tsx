import { useState, useEffect } from 'react';

interface TechStack {
  id: number;
  frontend_framework: string | null;
  backend_framework: string | null;
  database: string | null;
  api_type: string | null;
  cloud_provider: string | null;
  ci_cd_tool: string | null;
  monitoring_tool: string | null;
  auth_provider: string | null;
  environment: string | null;
  version_control: string | null;
  created_at: string;
}

export default function TechStackList() {
  const [stacks, setStacks] = useState<TechStack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStacks = async () => {
    try {
      const response = await fetch('http://localhost:3001/tech-stacks');
      if (!response.ok) {
        throw new Error('Failed to fetch tech stacks');
      }
      const data = await response.json();
      setStacks(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching stacks:', err);
      setError('Error loading tech stacks');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStacks();
    // Listen for new submissions
    const handleStackSubmitted = () => fetchStacks();
    window.addEventListener('stackSubmitted', handleStackSubmitted);
    return () => window.removeEventListener('stackSubmitted', handleStackSubmitted);
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading tech stacks...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Saved Tech Stacks</h2>
      {stacks.length === 0 ? (
        <p className="text-gray-600">No tech stacks saved yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Frontend</th>
                <th className="py-3 px-4 text-left">Backend</th>
                <th className="py-3 px-4 text-left">Database</th>
                <th className="py-3 px-4 text-left">API</th>
                <th className="py-3 px-4 text-left">Cloud</th>
                <th className="py-3 px-4 text-left">CI/CD</th>
                <th className="py-3 px-4 text-left">Monitoring</th>
                <th className="py-3 px-4 text-left">Auth</th>
                <th className="py-3 px-4 text-left">Environment</th>
                <th className="py-3 px-4 text-left">Version Control</th>
                <th className="py-3 px-4 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {stacks.map((stack) => (
                <tr key={stack.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{stack.id}</td>
                  <td className="py-3 px-4">{stack.frontend_framework || '-'}</td>
                  <td className="py-3 px-4">{stack.backend_framework || '-'}</td>
                  <td className="py-3 px-4">{stack.database || '-'}</td>
                  <td className="py-3 px-4">{stack.api_type || '-'}</td>
                  <td className="py-3 px-4">{stack.cloud_provider || '-'}</td>
                  <td className="py-3 px-4">{stack.ci_cd_tool || '-'}</td>
                  <td className="py-3 px-4">{stack.monitoring_tool || '-'}</td>
                  <td className="py-3 px-4">{stack.auth_provider || '-'}</td>
                  <td className="py-3 px-4">{stack.environment || '-'}</td>
                  <td className="py-3 px-4">{stack.version_control || '-'}</td>
                  <td className="py-3 px-4">
                    {new Date(stack.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}