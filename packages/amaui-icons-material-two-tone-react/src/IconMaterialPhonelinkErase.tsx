import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkErase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkErase'

      short_name='PhonelinkErase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.2l4-4 4 4 1-1-4-4 4-4-1-1-4 4-4-4-1 1 4 4-4 4zM9 23h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2z"/>
    </Icon>
  );
});

IconMaterialPhonelinkErase.displayName = 'AmauiIconMaterialPhonelinkErase';

export default IconMaterialPhonelinkErase;
