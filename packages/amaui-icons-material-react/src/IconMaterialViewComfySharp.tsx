import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewComfySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfySharp'
      short_name='ViewComfy'

      {...props}
    >
      <path d="M2 19.75V4.25H22V19.75ZM4 8.75H6.5V6.25H4ZM8.5 8.75H11V6.25H8.5ZM13 8.75H15.5V6.25H13ZM17.5 8.75H20V6.25H17.5ZM17.5 13.25H20V10.75H17.5ZM13 13.25H15.5V10.75H13ZM8.5 13.25H11V10.75H8.5ZM6.5 10.75H4V13.25H6.5ZM17.5 17.75H20V15.25H17.5ZM13 17.75H15.5V15.25H13ZM8.5 17.75H11V15.25H8.5ZM4 17.75H6.5V15.25H4Z"/>
    </Icon>
  );
});

IconMaterialViewComfySharp.displayName = 'AmauiIconMaterialViewComfySharp';

export default IconMaterialViewComfySharp;
