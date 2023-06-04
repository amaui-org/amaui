import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7W100Filled'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 14.35h.75l3.75-8v-.7H11v.7h3.95ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilter7W100Filled.displayName = 'AmauiIconMaterialFilter7W100Filled';

export default IconMaterialFilter7W100Filled;
