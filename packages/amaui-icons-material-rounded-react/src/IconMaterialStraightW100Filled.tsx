import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightW100Filled'

      short_name='Straight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-.15 0-.25-.1t-.1-.25V5.6L9.625 7.65q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l2.35-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.325q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1L12.35 5.6v13.75q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialStraightW100Filled.displayName = 'AmauiIconMaterialStraightW100Filled';

export default IconMaterialStraightW100Filled;
