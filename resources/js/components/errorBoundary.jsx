import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

   getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid red' }}>
          <h3>Something went wrong.</h3>
        </div>
      );
    }
    return this.props.children;
  }
}
