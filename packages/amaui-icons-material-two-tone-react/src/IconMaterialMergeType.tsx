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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59zm11.407 1.41l-3.408-3.407 1.4-1.407 3.41 3.408z"/>
    </Icon>
  );
});

IconMaterialMergeType.displayName = 'AmauiIconMaterialMergeType';

export default IconMaterialMergeType;
