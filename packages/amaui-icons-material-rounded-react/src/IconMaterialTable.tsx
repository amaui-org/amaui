import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTable = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Table'

      short_name='Table'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18ZM5 9h14V5H5Zm5.325 5h3.35v-3h-3.35Zm0 5h3.35v-3h-3.35ZM5 14h3.325v-3H5Zm10.675 0H19v-3h-3.325ZM5 19h3.325v-3H5Zm10.675 0H19v-3h-3.325Z"/>
    </Icon>
  );
});

IconMaterialTable.displayName = 'AmauiIconMaterialTable';

export default IconMaterialTable;
