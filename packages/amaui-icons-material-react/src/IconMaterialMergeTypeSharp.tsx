import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMergeTypeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeSharp'
      short_name='MergeType'

      {...props}
    >
      <path d="M16.6 20 11 14.4V6.875L8.4 9.475L6.975 8.05L12 3.025L17 8.025L15.575 9.45L13 6.875V13.6L18 18.6ZM7.425 20.025 6 18.625 9.2 15.425 10.6 16.85Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeSharp.displayName = 'AmauiIconMaterialMergeTypeSharp';

export default IconMaterialMergeTypeSharp;
