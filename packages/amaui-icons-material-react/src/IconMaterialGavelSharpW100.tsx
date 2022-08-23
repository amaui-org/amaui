import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelSharpW100'
      short_name='Gavel'

      {...props}
    >
      <path d="M4.15 20.35V19.65H14.85V20.35ZM10.2 14.7 5.45 9.95 6.65 8.7 11.45 13.45ZM15.45 9.45 10.7 4.65 11.95 3.45 16.7 8.2ZM20.6 19.1 8.45 6.95 8.95 6.45 21.1 18.6Z"/>
    </Icon>
  );
});

IconMaterialGavelSharpW100.displayName = 'AmauiIconMaterialGavelSharpW100';

export default IconMaterialGavelSharpW100;
