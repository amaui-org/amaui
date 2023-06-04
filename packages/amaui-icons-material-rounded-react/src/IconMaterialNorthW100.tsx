import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthW100'

      short_name='North'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.6q-.15 0-.25-.1t-.1-.25V4.475l-5.075 5.1q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l5.4-5.375q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l5.4 5.375q.1.1.1.25t-.1.25q-.1.125-.25.113-.15-.013-.25-.113L12.35 4.5v15.75q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialNorthW100.displayName = 'AmauiIconMaterialNorthW100';

export default IconMaterialNorthW100;
