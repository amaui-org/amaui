import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewSharpW100Filled'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M4.3 19.7V4.3H11V5H5V19H19V13H19.7V19.7ZM9.75 14.75 9.25 14.25 18.5 5H14V4.3H19.7V10H19V5.5Z"/>
    </Icon>
  );
});

export default IconMaterialOpenInNewSharpW100Filled;
