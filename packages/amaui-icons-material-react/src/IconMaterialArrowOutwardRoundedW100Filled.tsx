import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardRoundedW100Filled'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="m16.65 6.85-10 9.975q-.1.1-.237.1-.138 0-.238-.1-.1-.1-.1-.238 0-.137.1-.237l9.975-10H7q-.15 0-.25-.1T6.65 6q0-.15.1-.25t.25-.1h9.6q.325 0 .538.212.212.213.212.538V16q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialArrowOutwardRoundedW100Filled.displayName = 'AmauiIconMaterialArrowOutwardRoundedW100Filled';

export default IconMaterialArrowOutwardRoundedW100Filled;
