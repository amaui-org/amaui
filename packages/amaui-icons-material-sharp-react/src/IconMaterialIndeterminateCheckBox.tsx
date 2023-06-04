import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBox'

      short_name='IndeterminateCheckBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 13h10v-2H7Zm-4 8V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBox.displayName = 'AmauiIconMaterialIndeterminateCheckBox';

export default IconMaterialIndeterminateCheckBox;
