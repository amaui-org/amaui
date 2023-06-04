import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLastPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageW100Filled'

      short_name='LastPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.75 16.85q-.125-.125-.125-.25t.125-.25L11.1 12 6.75 7.65q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .125-.05.262-.05.138-.175.263L7.25 16.85q-.125.125-.25.125t-.25-.125Zm10.25.5q-.15 0-.25-.1t-.1-.25V7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLastPageW100Filled.displayName = 'AmauiIconMaterialLastPageW100Filled';

export default IconMaterialLastPageW100Filled;
