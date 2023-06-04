import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelvesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100Filled'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 21.825V2.2H5v2.125h14V2.2h.7v19.625H19V19.7H5v2.125ZM5 11h2.8V7.3h4.4V11H19V5.025H5Zm0 8h6.8v-3.7h4.4V19H19v-7.3H5Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100Filled.displayName = 'AmauiIconMaterialShelvesW100Filled';

export default IconMaterialShelvesW100Filled;
