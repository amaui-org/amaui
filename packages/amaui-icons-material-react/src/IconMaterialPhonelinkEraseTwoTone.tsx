import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseTwoTone'
      short_name='PhonelinkErase'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 17.2l4-4 4 4 1-1-4-4 4-4-1-1-4 4-4-4-1 1 4 4-4 4zM9 23h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseTwoTone.displayName = 'AmauiIconMaterialPhonelinkEraseTwoTone';

export default IconMaterialPhonelinkEraseTwoTone;
