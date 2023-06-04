import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideocamOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffFilled'

      short_name='VideocamOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.55 23.35.65 3.45l1.4-1.4 19.9 19.9ZM22 17.5l-4-4v1.675L6.825 4H18v6.5l4-4ZM4 4l14 14v2H2V4Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffFilled.displayName = 'AmauiIconMaterialVideocamOffFilled';

export default IconMaterialVideocamOffFilled;
