import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksTwoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoFilled'

      short_name='LooksTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h6v-2h-4v-2h4V7H9v2h4v2H9Zm-6 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoFilled.displayName = 'AmauiIconMaterialLooksTwoFilled';

export default IconMaterialLooksTwoFilled;
