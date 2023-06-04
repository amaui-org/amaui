import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCabinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinW100Filled'

      short_name='Cabin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h12v-3H6Zm0-3.7h12v-3H6Zm0-3.7h12v-1.5l-1.975-1.5h-8.05L6 10.1Zm2.9-3.7h6.225L12 5.525ZM5.3 19.7v-9.075L3.325 12.15 2.9 11.6l2.4-1.85v-2.5H6V9.2l6-4.575 9.1 6.975-.425.55-1.975-1.525V19.7ZM5.3 6q0-.8.488-1.375.487-.575 1.512-.575.725 0 1.012-.363.288-.362.288-.887h.7q0 .8-.488 1.375-.487.575-1.512.575-.725 0-1.013.362Q6 5.475 6 6Z"/>
    </Icon>
  );
});

IconMaterialCabinW100Filled.displayName = 'AmauiIconMaterialCabinW100Filled';

export default IconMaterialCabinW100Filled;
