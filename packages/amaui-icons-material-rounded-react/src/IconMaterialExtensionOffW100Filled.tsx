import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100Filled'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.625 20.6-1.1-1.1q-.1.1-.225.15-.125.05-.275.05h-4q-.35-.8-1.025-1.25-.675-.45-1.475-.45t-1.475.45q-.675.45-1.025 1.25h-4q-.3 0-.5-.2t-.2-.5v-4q.8-.35 1.25-1.012.45-.663.45-1.488t-.45-1.488q-.45-.662-1.25-1.012V6q0-.15.05-.275.05-.125.15-.225l-1.1-1.1Q3.3 4.275 3.3 4.15t.125-.25q.125-.125.25-.125t.25.125l16.2 16.2q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Zm-.9-4.7L8.125 5.3h.9q.35-.8 1.013-1.25.662-.45 1.487-.45.825 0 1.488.45.662.45 1.012 1.25h4q.3 0 .5.2t.2.5v4q.8.35 1.25 1.012.45.663.45 1.488t-.45 1.488q-.45.662-1.25 1.012Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100Filled.displayName = 'AmauiIconMaterialExtensionOffW100Filled';

export default IconMaterialExtensionOffW100Filled;
