import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeType = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeType'

      short_name='MergeType'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.6 20 11 14.4V6.875l-2.6 2.6L6.975 8.05 12 3.025l5 5-1.425 1.425L13 6.875V13.6l5 5Zm-9.175.025L6 18.625l3.2-3.2 1.4 1.425Z"/>
    </Icon>
  );
});

IconMaterialMergeType.displayName = 'AmauiIconMaterialMergeType';

export default IconMaterialMergeType;
