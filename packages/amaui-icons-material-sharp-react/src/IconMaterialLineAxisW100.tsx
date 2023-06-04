import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineAxisW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineAxisW100'

      short_name='LineAxis'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.5 18-.5-.5 6.6-6.6 4 4 2.575-2.975-6.55-6.05L3.5 12l-.5-.5 6.6-6.6 7.05 6.5 3.9-4.5.5.45-3.875 4.525 3.875 3.575-.5.5-3.85-3.55-3.05 3.55L9.6 11.9Z"/>
    </Icon>
  );
});

IconMaterialLineAxisW100.displayName = 'AmauiIconMaterialLineAxisW100';

export default IconMaterialLineAxisW100;
