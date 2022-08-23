import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks3SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3SharpW100Filled'
      short_name='Looks3'

      {...props}
    >
      <path d="M9.65 16.35H14.35V7.65H9.65V8.35H13.65V11.65H11.15V12.35H13.65V15.65H9.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialLooks3SharpW100Filled.displayName = 'AmauiIconMaterialLooks3SharpW100Filled';

export default IconMaterialLooks3SharpW100Filled;
