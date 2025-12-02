import {
  Component,
  type ComponentType,
  type GetDerivedStateFromError,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

/**
 * React error boundary that catches errors in child components.
 *
 * @example
 * <ErrorBoundary fallback={<ErrorPage />}>
 *   <App />
 * </ErrorBoundary>
 *
 * @example
 * // With error details
 * <ErrorBoundary fallback={({ error }) => <div>{String(error)}</div>}>
 *   <App />
 * </ErrorBoundary>
 */
export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback?: ReactNode | ComponentType<{ error: unknown }>;
}

interface ErrorBoundaryState {
  error?: unknown;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {};

  // eslint-disable-next-line max-len
  static getDerivedStateFromError: GetDerivedStateFromError<ErrorBoundaryProps, ErrorBoundaryState> = (error) => ({ error });

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const {
      state: {
        error,
      },
      props: {
        fallback: Fallback,
        children,
      },
    } = this;

    return 'error' in this.state
      ? typeof Fallback === 'function'
        ? <Fallback error={error} />
        : Fallback
      : children;
  }
}
