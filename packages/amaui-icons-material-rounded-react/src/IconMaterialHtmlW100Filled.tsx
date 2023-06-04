import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHtmlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HtmlW100Filled'

      short_name='Html'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M.55 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1H.9v2.15q0 .15-.1.25t-.25.1Zm7.75 0q-.15 0-.25-.1t-.1-.25V10.1H6.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.65v4.15q0 .15-.1.25t-.25.1Zm12.75 0q-.325 0-.537-.213-.213-.212-.213-.537v-4.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.15h2.45q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8.5 0q-.15 0-.25-.1t-.1-.25V10.1q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V10.1h-1.8v3.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V10.1h-1.8v4.15q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHtmlW100Filled.displayName = 'AmauiIconMaterialHtmlW100Filled';

export default IconMaterialHtmlW100Filled;
