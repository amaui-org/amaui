import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SquareFilled'

      short_name='Square'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialSquareFilled.displayName = 'AmauiIconMaterialSquareFilled';

export default IconMaterialSquareFilled;
