import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewspaperSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperSharpW100'
      short_name='Newspaper'

      {...props}
    >
      <path d="M2.65 20.35V4.575L3.675 5.6L5.325 3.925L7 5.6L8.675 3.925L10.325 5.6L12 3.925L13.675 5.6L15.325 3.925L17 5.6L18.675 3.925L20.325 5.6L21.35 4.575V20.35ZM3.35 19.65H11.65V12.35H3.35ZM12.35 19.65H20.65V16.35H12.35ZM12.35 15.65H20.65V12.35H12.35ZM3.35 11.65H20.65V7.1H3.35Z"/>
    </Icon>
  );
});

IconMaterialNewspaperSharpW100.displayName = 'AmauiIconMaterialNewspaperSharpW100';

export default IconMaterialNewspaperSharpW100;
