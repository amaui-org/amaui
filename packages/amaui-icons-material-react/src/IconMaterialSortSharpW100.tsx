import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortSharpW100'
      short_name='Sort'

      {...props}
    >
      <path d="M3.65 17.35V16.65H8.35V17.35ZM3.65 6.35V5.65H20.35V6.35ZM3.65 11.85V11.15H14.35V11.85Z"/>
    </Icon>
  );
});

IconMaterialSortSharpW100.displayName = 'AmauiIconMaterialSortSharpW100';

export default IconMaterialSortSharpW100;
