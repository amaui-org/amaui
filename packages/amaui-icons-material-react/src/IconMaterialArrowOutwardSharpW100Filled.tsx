import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowOutwardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutwardSharpW100Filled'
      short_name='ArrowOutward'

      {...props}
    >
      <path d="m6.4 17.075-.475-.475L16.15 6.35h-9.5v-.7h10.7v10.7h-.7v-9.5Z"/>
    </Icon>
  );
});

export default IconMaterialArrowOutwardSharpW100Filled;
