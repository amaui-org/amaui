import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseFilled'

      short_name='PhonelinkErase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.4 16 13 14.6l2.6-2.6L13 9.4 14.4 8l2.6 2.6L19.6 8 21 9.4 18.4 12l2.6 2.6-1.4 1.4-2.6-2.6ZM4 23V1h14v6h-2V6H6v12h10v-1h2v6Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseFilled.displayName = 'AmauiIconMaterialPhonelinkEraseFilled';

export default IconMaterialPhonelinkEraseFilled;
