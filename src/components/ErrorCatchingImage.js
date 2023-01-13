import React, { Component } from 'react';

class ErrorCatchingImage extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return;
    }
  }
}
