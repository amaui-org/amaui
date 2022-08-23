import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListSharpW100'
      short_name='FilterList'

      {...props}
    >
      <path d="M10.65 17.35V16.65H13.35V17.35ZM3.65 6.35V5.65H20.35V6.35ZM6.65 11.85V11.15H17.35V11.85Z"/>
    </Icon>
  );
});

IconMaterialFilterListSharpW100.displayName = 'AmauiIconMaterialFilterListSharpW100';

export default IconMaterialFilterListSharpW100;
