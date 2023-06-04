import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageFilled'

      short_name='Package'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm5-8 4-2 4 2V5H8Zm-1 4h5v-2H7Z"/>
    </Icon>
  );
});

IconMaterialPackageFilled.displayName = 'AmauiIconMaterialPackageFilled';

export default IconMaterialPackageFilled;
