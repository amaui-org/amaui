import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 9.75 2-1 2 1V5h-4ZM7 17v-2h5v2Zm-4 4V3h18v18ZM5 5v14V5Zm0 14h14V5h-3v8l-4-2-4 2V5H5Z"/>
    </Icon>
  );
});

IconMaterialPackage.displayName = 'AmauiIconMaterialPackage';

export default IconMaterialPackage;
