import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRollSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollSharpW100'
      short_name='CameraRoll'

      {...props}
    >
      <path d="M20.7 18.7H12.65V20.7H3.3V4.3H6.3V2.3H9.7V4.3H12.65V6.3H20.7ZM20 18V7H12V5H4V20H12V18ZM9.8 16.7H11.2V15.3H9.8ZM9.8 9.7H11.2V8.3H9.8ZM13.55 16.7H14.95V15.3H13.55ZM13.55 9.7H14.95V8.3H13.55ZM17.3 16.7H18.7V15.3H17.3ZM17.3 9.7H18.7V8.3H17.3ZM4 5V7V18V20Z"/>
    </Icon>
  );
});

IconMaterialCameraRollSharpW100.displayName = 'AmauiIconMaterialCameraRollSharpW100';

export default IconMaterialCameraRollSharpW100;
