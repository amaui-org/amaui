import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserSharpFilled'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M11 21V14.85L9.4 16.45L8 15L12 11L16 15L14.6 16.45L13 14.85V21ZM3 21V3H21V21H15V19H19V7H5V19H9V21Z"/>
    </Icon>
  );
});

export default IconMaterialOpenInBrowserSharpFilled;
