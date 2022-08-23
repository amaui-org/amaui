import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureSharpW100'
      short_name='Exposure'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM6.4 8.1H10.6V7.4H6.4ZM5 19H19V5ZM14.9 17.6V15.6H12.9V14.9H14.9V12.9H15.6V14.9H17.6V15.6H15.6V17.6Z"/>
    </Icon>
  );
});

IconMaterialExposureSharpW100.displayName = 'AmauiIconMaterialExposureSharpW100';

export default IconMaterialExposureSharpW100;
