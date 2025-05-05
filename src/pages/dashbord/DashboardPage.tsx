import React from 'react';
import { Property } from '../../types';
import DashboardOverview from '../../components/dashbord/Dashboard';
import PropertyList from '../../components/dashbord/properties/PropertyList';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { getDashboardStats } from '../../data/mockData';

interface DashboardPageProps {
  properties: Property[];
}

const DashboardPage: React.FC<DashboardPageProps> = ({ properties }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <DashboardOverview stats={getDashboardStats(properties)} />
      
      <Card className="mb-6 mt-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Properties</h2>
        </CardHeader>
        <CardBody>
          <PropertyList
            properties={properties.slice(0, 3)}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;