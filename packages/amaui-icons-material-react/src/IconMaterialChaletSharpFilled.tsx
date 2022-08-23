import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChaletSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletSharpFilled'
      short_name='Chalet'

      {...props}
    >
      <path d="M17.5 11V9.8L16.75 10.55L16.05 9.85L17.5 8.4V7.5H16.6L15.15 8.95L14.45 8.25L15.2 7.5H14V6.5H15.2L14.45 5.75L15.15 5.025L16.6 6.475H17.5V5.6L16.05 4.15L16.75 3.45L17.5 4.2V3H18.5V4.2L19.25 3.45L19.95 4.15L18.5 5.6V6.5H19.4L20.85 5.05L21.55 5.75L20.8 6.5H22V7.5H20.8L21.55 8.25L20.85 8.95L19.4 7.5H18.5V8.4L19.95 9.85L19.25 10.55L18.5 9.8V11ZM5 20V15.3L3.9 16.4L2.5 15L10 7.5L17.5 15L16.1 16.425L15 15.325V20H11V15H9V20Z"/>
    </Icon>
  );
});

IconMaterialChaletSharpFilled.displayName = 'AmauiIconMaterialChaletSharpFilled';

export default IconMaterialChaletSharpFilled;
