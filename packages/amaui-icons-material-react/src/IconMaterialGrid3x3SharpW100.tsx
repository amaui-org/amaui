import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid3x3SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3SharpW100'
      short_name='Grid3x3'

      {...props}
    >
      <path d="M9.3 18.7V14.7H5.3V14H9.3V10H5.3V9.3H9.3V5.3H10V9.3H14V5.3H14.7V9.3H18.7V10H14.7V14H18.7V14.7H14.7V18.7H14V14.7H10V18.7ZM10 14H14V10H10Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3SharpW100.displayName = 'AmauiIconMaterialGrid3x3SharpW100';

export default IconMaterialGrid3x3SharpW100;
