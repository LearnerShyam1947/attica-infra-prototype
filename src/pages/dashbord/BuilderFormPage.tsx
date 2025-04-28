import React from 'react';
import { Builder } from '../../types';
import BuilderForm from './../../components/dashbord/builders/BuilderForm';
import { Card, CardBody } from '../../components/ui/Card';

interface BuilderFormPageProps {
  builder?: Builder;
  onSubmit: (builder: Omit<Builder, 'id'>) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

const BuilderFormPage: React.FC<BuilderFormPageProps> = ({
  builder,
  onSubmit,
  onCancel,
  isEditing = false,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {isEditing ? 'Edit Builder' : 'Add New Builder'}
      </h1>
      <Card>
        <CardBody>
          <BuilderForm
            builder={builder}
            onSubmit={onSubmit}
            onCancel={onCancel}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BuilderFormPage;
