import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAtmW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmW100Filled'

      short_name='Atm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 14.6v-4.5H8.4v-.7h5.2v.7h-2.25v4.5Zm-8 0V9.4h4.2v5.2h-.7v-1.75h-2.8v1.75Zm.7-2.45h2.8V10.1h-2.8Zm11.8 2.45V9.4h6.2v5.2h-.7v-4.5H18.6v3.5h-.7v-3.5h-2.05v4.5Z"/>
    </Icon>
  );
});

IconMaterialAtmW100Filled.displayName = 'AmauiIconMaterialAtmW100Filled';

export default IconMaterialAtmW100Filled;
