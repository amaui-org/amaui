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
      <path d="M.2 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5H.9v2.5Zm7.75 0v-4.5h-2v-.7h4.7v.7h-2v4.5Zm12.35 0V9.4h.7v4.5h2.8v.7Zm-8.1 0V9.4h5.7v5.2h-.7v-4.5h-1.8v3.5h-.7v-3.5h-1.8v4.5Z"/>
    </Icon>
  );
});

IconMaterialHtmlW100Filled.displayName = 'AmauiIconMaterialHtmlW100Filled';

export default IconMaterialHtmlW100Filled;
