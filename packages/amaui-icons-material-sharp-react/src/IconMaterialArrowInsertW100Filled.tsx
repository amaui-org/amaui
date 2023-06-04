import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsertW100Filled'

      short_name='ArrowInsert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.875 17.075 7.625 6.85v9.5h-.7V5.65h10.7v.7h-9.5L18.35 16.6Z"/>
    </Icon>
  );
});

IconMaterialArrowInsertW100Filled.displayName = 'AmauiIconMaterialArrowInsertW100Filled';

export default IconMaterialArrowInsertW100Filled;
