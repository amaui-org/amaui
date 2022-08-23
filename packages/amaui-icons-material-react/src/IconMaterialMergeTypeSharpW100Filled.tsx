import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMergeTypeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeSharpW100Filled'
      short_name='MergeType'

      {...props}
    >
      <path d="M16.6 19.1 11.65 14.15V5.25L8.4 8.5L7.9 8L12 3.9L16.1 8L15.6 8.5L12.35 5.25V13.85L17.1 18.6ZM7.4 19.1 6.9 18.6 10.1 15.4 10.6 15.9Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeSharpW100Filled.displayName = 'AmauiIconMaterialMergeTypeSharpW100Filled';

export default IconMaterialMergeTypeSharpW100Filled;
