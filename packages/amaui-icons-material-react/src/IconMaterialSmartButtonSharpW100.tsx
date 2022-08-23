import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonSharpW100'
      short_name='SmartButton'

      {...props}
    >
      <path d="M2.65 16.35V7.65H21.35V16.35H19.15V15.65H20.65V8.35H3.35V15.65H9.85V16.35ZM14.5 18.15 13.675 16.325 11.85 15.5 13.675 14.675 14.5 12.85 15.325 14.675 17.15 15.5 15.325 16.325ZM17 14 16.375 12.625 15 12 16.375 11.375 17 10 17.625 11.375 19 12 17.625 12.625Z"/>
    </Icon>
  );
});

IconMaterialSmartButtonSharpW100.displayName = 'AmauiIconMaterialSmartButtonSharpW100';

export default IconMaterialSmartButtonSharpW100;
