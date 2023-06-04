import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFirstPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageW100Filled'

      short_name='FirstPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.75 16.85-4.325-4.325q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L16.75 7.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25L12.9 12l4.35 4.35q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Zm-9.75.5q-.15 0-.25-.1t-.1-.25V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFirstPageW100Filled.displayName = 'AmauiIconMaterialFirstPageW100Filled';

export default IconMaterialFirstPageW100Filled;
