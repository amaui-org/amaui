import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightFilled'

      short_name='SwitchRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 19-7-7 7-7Zm4 0V5l7 7Zm1.5-3.625L18.875 12 15.5 8.625Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightFilled.displayName = 'AmauiIconMaterialSwitchRightFilled';

export default IconMaterialSwitchRightFilled;
