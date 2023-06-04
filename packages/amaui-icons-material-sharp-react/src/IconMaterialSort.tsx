import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSort = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sort'

      short_name='Sort'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18v-2h6v2Zm0-5v-2h12v2Zm0-5V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialSort.displayName = 'AmauiIconMaterialSort';

export default IconMaterialSort;
