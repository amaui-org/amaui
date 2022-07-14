import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharpW100'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6 10.3H18V4H6ZM5.3 11V3.3H18.7V11ZM6 20H18V13.7H6ZM5.3 20.7V13H18.7V20.7ZM6 10.3V4V10.3ZM6 20V13.7V20Z"/>
    </Icon>
  );
});

export default IconMaterialSplitscreenSharpW100;
