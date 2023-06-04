import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceW100Filled'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.625 16.85 4.3 12.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l4.35-4.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-4 4h14.75q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.125l4.025 4.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceW100Filled.displayName = 'AmauiIconMaterialKeyboardBackspaceW100Filled';

export default IconMaterialKeyboardBackspaceW100Filled;
