import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTuneSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneSharpW100Filled'
      short_name='Tune'

      {...props}
    >
      <path d="M3.65 18.35V17.65H8.35V18.35ZM3.65 6.35V5.65H12.35V6.35ZM11.65 20.35V15.65H12.35V17.65H20.35V18.35H12.35V20.35ZM7.65 14.35V12.35H3.65V11.65H7.65V9.65H8.35V14.35ZM11.65 12.35V11.65H20.35V12.35ZM15.65 8.35V3.65H16.35V5.65H20.35V6.35H16.35V8.35Z"/>
    </Icon>
  );
});

IconMaterialTuneSharpW100Filled.displayName = 'AmauiIconMaterialTuneSharpW100Filled';

export default IconMaterialTuneSharpW100Filled;
