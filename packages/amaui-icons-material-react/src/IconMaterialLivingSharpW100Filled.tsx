import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLivingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingSharpW100Filled'
      short_name='Living'

      {...props}
    >
      <path d="M3.3 20.7V3.3H20.7V20.7ZM5.8 17.2H18.2V10.35H16.95V7.3H7.05V10.35H5.8ZM6.5 16.5V11H8.5V14H15.5V11H17.5V16.5ZM9.2 13.3V10.35H7.75V8H16.25V10.35H14.8V13.3Z"/>
    </Icon>
  );
});

IconMaterialLivingSharpW100Filled.displayName = 'AmauiIconMaterialLivingSharpW100Filled';

export default IconMaterialLivingSharpW100Filled;
