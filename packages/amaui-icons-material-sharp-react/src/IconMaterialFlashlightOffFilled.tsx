import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffFilled'

      short_name='FlashlightOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22V10.8L1.4 4.2l1.4-1.4 18.4 18.4-1.4 1.4-3.8-3.8V22ZM6 3.15V2h12v3H7.85Zm10 10L9.85 7H18v1l-2 3Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffFilled.displayName = 'AmauiIconMaterialFlashlightOffFilled';

export default IconMaterialFlashlightOffFilled;
