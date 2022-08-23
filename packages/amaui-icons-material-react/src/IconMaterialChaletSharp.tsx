import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChaletSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletSharp'
      short_name='Chalet'

      {...props}
    >
      <path d="M17.5 11V9.8L16.75 10.55L16.05 9.85L17.5 8.4V7.5H16.6L15.15 8.95L14.45 8.25L15.2 7.5H14V6.5H15.2L14.45 5.75L15.15 5.05L16.6 6.5H17.5V5.6L16.05 4.15L16.75 3.45L17.5 4.2V3H18.5V4.2L19.25 3.45L19.95 4.15L18.5 5.6V6.5H19.4L20.85 5.05L21.55 5.75L20.8 6.5H22V7.5H20.8L21.55 8.25L20.85 8.95L19.4 7.5H18.5V8.4L19.95 9.85L19.25 10.55L18.5 9.8V11ZM16.1 16.425 15 15.325V20H5V15.3L3.9 16.4L2.5 15L10 7.5L17.5 15ZM7 18H9V15H11V18H13V13.325L10 10.325L7 13.325ZM7 18H9H11H13H10H7Z"/>
    </Icon>
  );
});

IconMaterialChaletSharp.displayName = 'AmauiIconMaterialChaletSharp';

export default IconMaterialChaletSharp;
