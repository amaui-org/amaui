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
      <path d="M15.5 15.375 18.875 12 15.5 8.625Zm.2 1.925q-.475.475-1.087.212Q14 17.25 14 16.575v-9.15q0-.675.613-.938.612-.262 1.087.213l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325Zm-7.4 0-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.475-.475 1.087-.213.613.263.613.938v9.15q0 .675-.613.937-.612.263-1.087-.212Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightFilled.displayName = 'AmauiIconMaterialSwitchRightFilled';

export default IconMaterialSwitchRightFilled;
