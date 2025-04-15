import express from 'express';
import cors from 'cors';
import pg from 'pg';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new pg.Pool({
  user: 'thendo',
  host: 'localhost',
  database: 'groweasy_analytics',
  password: '',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('PostgreSQL connection error:', err.stack);
  } else {
    console.log('PostgreSQL connected successfully');
  }
});

app.get('/', (req, res) => {
  res.send('GrowEasy Analytics Backend');
});

app.post('/tech-stack', async (req, res) => {
  console.log('Handling POST /tech-stack:', req.body);
  const {
    frontendFramework = null,
    backendFramework = null,
    database = null,
    apiType = null,
    cloudProvider = null,
    ciCdTool = null,
    monitoringTool = null,
    authProvider = null,
    environment = null,
    versionControl = null,
    notes = null,
  } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO tech_stacks (
        frontend_framework, backend_framework, database, api_type,
        cloud_provider, ci_cd_tool, monitoring_tool, auth_provider,
        environment, version_control, notes
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *`,
      [
        frontendFramework,
        backendFramework,
        database,
        apiType,
        cloudProvider,
        ciCdTool,
        monitoringTool,
        authProvider,
        environment,
        versionControl,
        notes,
      ]
    );
    console.log('Query result:', result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error in POST /tech-stack:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});