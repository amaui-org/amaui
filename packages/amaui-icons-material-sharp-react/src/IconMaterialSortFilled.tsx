import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSortFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortFilled'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18v-2h6v2Zm0-5v-2h12v2Zm0-5V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialSortFilled.displayName = 'AmauiIconMaterialSortFilled';

export default IconMaterialSortFilled;
