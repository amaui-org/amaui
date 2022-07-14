import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharpW100Filled'
      short_name='Chair'

      {...props}
    >
      <path d="M4.7 18.85V17.5H2.3V9.8H5V14.15H19V9.8H21.7V17.5H19.3V18.85H18.65V17.5H5.4V18.85ZM5.7 13.45V9.1H4V5.9H20V9.1H18.3V13.45Z"/>
    </Icon>
  );
});

export default IconMaterialChairSharpW100Filled;
