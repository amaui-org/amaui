import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAcUnitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AcUnitSharpW100'
      short_name='AcUnit'

      {...props}
    >
      <path d="M11.65 21.35V16.3L7.75 20.15L7.25 19.65L11.65 15.25V12.35H8.75L4.35 16.75L3.85 16.25L7.7 12.35H2.65V11.65H7.7L3.85 7.75L4.35 7.25L8.75 11.65H11.65V8.75L7.25 4.35L7.75 3.85L11.65 7.7V2.65H12.35V7.7L16.25 3.85L16.75 4.35L12.35 8.75V11.65H15.25L19.65 7.25L20.15 7.75L16.3 11.65H21.35V12.35H16.3L20.15 16.25L19.65 16.75L15.25 12.35H12.35V15.25L16.75 19.65L16.25 20.15L12.35 16.3V21.35Z"/>
    </Icon>
  );
});

IconMaterialAcUnitSharpW100.displayName = 'AmauiIconMaterialAcUnitSharpW100';

export default IconMaterialAcUnitSharpW100;
