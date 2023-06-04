import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistribute'

      short_name='VerticalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"/>
    </Icon>
  );
});

IconMaterialVerticalDistribute.displayName = 'AmauiIconMaterialVerticalDistribute';

export default IconMaterialVerticalDistribute;
