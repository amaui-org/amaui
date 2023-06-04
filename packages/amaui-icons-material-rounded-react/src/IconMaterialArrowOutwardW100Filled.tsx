import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowOutwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardW100Filled'

      short_name='ArrowOutward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.65 6.85-10 9.975q-.1.1-.237.1-.138 0-.238-.1-.1-.1-.1-.238 0-.137.1-.237l9.975-10H7q-.15 0-.25-.1T6.65 6q0-.15.1-.25t.25-.1h9.6q.325 0 .538.212.212.213.212.538V16q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardW100Filled.displayName = 'AmauiIconMaterialArrowOutwardW100Filled';

export default IconMaterialArrowOutwardW100Filled;
