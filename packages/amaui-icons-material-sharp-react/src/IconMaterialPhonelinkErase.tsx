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
      <path d="M14.4 16 13 14.6l2.6-2.6L13 9.4 14.4 8l2.6 2.6L19.6 8 21 9.4 18.4 12l2.6 2.6-1.4 1.4-2.6-2.6ZM6 21h10v-1H6ZM6 4h10V3H6ZM4 23V1h14v6h-2V6H6v12h10v-1h2v6ZM6 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkErase.displayName = 'AmauiIconMaterialPhonelinkErase';

export default IconMaterialPhonelinkErase;
