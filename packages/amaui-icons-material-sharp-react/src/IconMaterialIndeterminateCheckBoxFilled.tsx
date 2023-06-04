import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxFilled'

      short_name='IndeterminateCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13h10v-2H7Zm-4 8V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxFilled.displayName = 'AmauiIconMaterialIndeterminateCheckBoxFilled';

export default IconMaterialIndeterminateCheckBoxFilled;
