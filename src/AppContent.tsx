import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import CommingSoon from './components/CommingSoon';
import DashboardLayout from './components/dashbord/DashboardLayout';
import { mockBuilders } from './data/mockBuilders';
import { mockProperties } from './data/mockData';
import BuilderFormPage from './pages/dashbord/BuilderFormPage';
import BuildersPage from './pages/dashbord/BuildersPage';
import DashboardPage from './pages/dashbord/DashboardPage';
import PropertiesPage from './pages/dashbord/PropertiesPage';
import PropertyFormPage from './pages/dashbord/PropertyFormPage';
import { Builder, Property } from './types';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import QuoteSelection from './pages/QuoteSelection';
import BuilderSelection from './pages/BuilderSelection';
import ConstructionForm from './pages/ConstructionForm';
import SingleQuote from './pages/SingleQuote';
import SellBuy from './pages/SellBuy';
import PropertyDetails from './pages/PropertyDetails';
import NotFound from './components/NotFound';
import Layout from './components/layout/Layout';
import MaterialsOrderForm from './MaterialsOrderForm';

const AppContent = () => {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [builders, setBuilders] = useState<Builder[]>(mockBuilders);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [editProperty, setEditProperty] = useState<any>(null);
  const [editBuilder, setEditBuilder] = useState<any>(null);
  const [propertySearch, setPropertySearch] = useState({
    city: '',
    area: '',
    pincode: ''
  });
  const [builderSearch, setBuilderSearch] = useState({
    city: '',
    area: '',
    pincode: ''
  });
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };



  const handleDeleteProperty = (id: string) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter((p) => p.id !== id));
    }
  };

  const handleDeleteBuilder = (id: string) => {
    if (window.confirm('Are you sure you want to delete this builder?')) {
      setBuilders(builders.filter((b) => b.id !== id));
    }
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterType ? property.type === filterType : true;

    const matchesCity = propertySearch.city
      ? property.location.city.toLowerCase().includes(propertySearch.city.toLowerCase())
      : true;

    const matchesArea = propertySearch.area
      ? property.location.area.toLowerCase().includes(propertySearch.area.toLowerCase())
      : true;

    const matchesPincode = propertySearch.pincode
      ? property.location.pincode.includes(propertySearch.pincode)
      : true;

    return matchesSearch && matchesFilter && matchesCity && matchesArea && matchesPincode;
  });

  const filteredBuilders = builders.filter((builder) => {
    const matchesCity = builderSearch.city
      ? builder.city.toLowerCase().includes(builderSearch.city.toLowerCase())
      : true;

    const matchesArea = builderSearch.area
      ? builder.area.toLowerCase().includes(builderSearch.area.toLowerCase())
      : true;

    const matchesPincode = builderSearch.pincode
      ? builder.pincode.includes(builderSearch.pincode)
      : true;

    return matchesCity && matchesArea && matchesPincode;
  });

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (

    <Routes>
      <Route element={<Layout />}>
      <Route path='/test' element={<MaterialsOrderForm />} />

        <Route path="interior-experts" element={<CommingSoon />} />
        <Route path="architecture-design" element={<CommingSoon />} />

        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
        <Route path="quote" element={
          <ProtectedRoute>
            <QuoteSelection />
          </ProtectedRoute>
        } />
        <Route path="builders" element={
          <ProtectedRoute>
            <BuilderSelection />
          </ProtectedRoute>
        } />
        <Route path="construction-form" element={
          <ProtectedRoute>
            <ConstructionForm />
          </ProtectedRoute>
        } />
        <Route path="single-quote" element={
          <ProtectedRoute>
            <SingleQuote />
          </ProtectedRoute>
        } />
        <Route path="sell-buy" element={
          <ProtectedRoute>
            <SellBuy />
          </ProtectedRoute>
        } />
        <Route path="property/:type" element={
          <ProtectedRoute>
            <PropertyDetails />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage properties={properties} />} />

        <Route
          path="/dashboard/properties"
          element={
            <PropertiesPage
              properties={filteredProperties}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterType={filterType}
              setFilterType={setFilterType}
              propertySearch={propertySearch}
              setPropertySearch={setPropertySearch}
              onEdit={(id) => {
                const property = properties.find((p) => p.id === id);
                if (property) {
                  setEditProperty(property);
                }
              }}
              onDelete={handleDeleteProperty}
            />
          }
        />

        <Route
          path="/dashboard/properties/add"
          element={
            <PropertyFormPage/>
          }
        />

        <Route
          path="/dashboard/properties/edit/:id"
          element={
            <PropertyFormPage
              property={editProperty}
              isEditing
            />
          }
        />

        <Route
          path="/dashboard/builders"
          element={
            <BuildersPage
              builders={filteredBuilders}
              builderSearch={builderSearch}
              setBuilderSearch={setBuilderSearch}
              onEdit={(id) => {
                const builder = builders.find((b) => b.id === id);
                if (builder) {
                  setEditBuilder(builder);
                }
              }}
              onDelete={handleDeleteBuilder}
              onAddNew={() => setEditBuilder(null)}
            />
          }
        />

        <Route
          path="/dashboard/builders/add"
          element={
            <BuilderFormPage
            />
          }
        />

        <Route
          path="/dashboard/builders/edit/:id"
          element={
            <BuilderFormPage
              builder={editBuilder}
              isEditing
            />
          }
        />
      </Route>

    </Routes>

  );
};

export default AppContent;