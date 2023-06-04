import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoginW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginW100Filled'

      short_name='Login'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.6 15.75-.5-.5L13.35 13h-8.8v-.7h8.8l-2.25-2.25.5-.5 3.1 3.1Zm.1 5.25v-.7h7.05V5H11.7v-.7h7.75V21Z"/>
    </Icon>
  );
});

IconMaterialLoginW100Filled.displayName = 'AmauiIconMaterialLoginW100Filled';

export default IconMaterialLoginW100Filled;
