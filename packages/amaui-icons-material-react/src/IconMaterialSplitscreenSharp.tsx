import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharp'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6 9H18V4H6ZM4 11V2H20V11ZM6 20H18V15H6ZM4 22V13H20V22ZM6 9V4V9ZM6 20V15V20Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenSharp.displayName = 'AmauiIconMaterialSplitscreenSharp';

export default IconMaterialSplitscreenSharp;
