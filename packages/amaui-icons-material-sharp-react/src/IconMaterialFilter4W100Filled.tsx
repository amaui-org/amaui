import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4W100Filled'

      short_name='Filter4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7ZM15 14.35h.7v-8.7H15v4h-3.3v-4H11v4.7h4Z"/>
    </Icon>
  );
});

IconMaterialFilter4W100Filled.displayName = 'AmauiIconMaterialFilter4W100Filled';

export default IconMaterialFilter4W100Filled;
