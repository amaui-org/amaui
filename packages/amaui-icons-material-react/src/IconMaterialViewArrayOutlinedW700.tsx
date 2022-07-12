import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArrayOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArrayOutlinedW700'
      short_name='ViewArray'

      {...props}
    >
      <path d="M9 7V17ZM18.775 19.775V4.225H23.3V19.775ZM6.225 19.775V4.225H17.775V19.775ZM0.7 19.775V4.225H5.225V19.775ZM9 17H15V7H9Z"/>
    </Icon>
  )
});

export default IconMaterialViewArrayOutlinedW700;
