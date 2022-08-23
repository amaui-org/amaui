import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelSharp'
      short_name='Gavel'

      {...props}
    >
      <path d="M4 21V19H16V21ZM9.65 16.15 4 10.5 6.1 8.35 11.8 14ZM16 9.8 10.35 4.1 12.5 2 18.15 7.65ZM20.6 20 7.55 6.95 8.95 5.55 22 18.6Z"/>
    </Icon>
  );
});

IconMaterialGavelSharp.displayName = 'AmauiIconMaterialGavelSharp';

export default IconMaterialGavelSharp;
