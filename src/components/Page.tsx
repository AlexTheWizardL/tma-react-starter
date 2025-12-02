import { useNavigate } from 'react-router-dom';
import { backButton } from '@tma.js/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';

/**
 * Page wrapper that manages TMA back button visibility.
 *
 * @example
 * <Page back={true}>
 *   <YourPageContent />
 * </Page>
 */
export function Page({ children, back = true }: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   */
  back?: boolean
}>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => {
        navigate(-1);
      });
    }
    backButton.hide();
  }, [back]);

  return <>{children}</>;
}