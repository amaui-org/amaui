import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWestSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WestSharpW100'
      short_name='West'

      {...props}
    >
      <path d="M9.2 18.175 3.025 12 9.2 5.825 9.7 6.325 4.375 11.65H20.475V12.35H4.375L9.7 17.675Z"/>
    </Icon>
  );
});

IconMaterialWestSharpW100.displayName = 'AmauiIconMaterialWestSharpW100';

export default IconMaterialWestSharpW100;
