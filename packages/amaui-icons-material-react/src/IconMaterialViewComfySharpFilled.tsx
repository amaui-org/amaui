import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewComfySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfySharpFilled'
      short_name='ViewComfy'

      {...props}
    >
      <path d="M7.25 8.75V4.25H11.5V8.75ZM12.5 8.75V4.25H16.75V8.75ZM17.75 8.75V4.25H22V8.75ZM2 8.75V4.25H6.25V8.75ZM12.5 14.25V9.75H16.75V14.25ZM17.75 14.25V9.75H22V14.25ZM2 14.25V9.75H6.25V14.25ZM12.5 19.75V15.25H16.75V19.75ZM7.25 19.75V15.25H11.5V19.75ZM17.75 19.75V15.25H22V19.75ZM2 19.75V15.25H6.25V19.75ZM7.25 14.25V9.75H11.5V14.25Z"/>
    </Icon>
  );
});

IconMaterialViewComfySharpFilled.displayName = 'AmauiIconMaterialViewComfySharpFilled';

export default IconMaterialViewComfySharpFilled;
