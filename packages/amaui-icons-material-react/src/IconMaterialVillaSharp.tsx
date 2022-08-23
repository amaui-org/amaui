import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaSharp'
      short_name='Villa'

      {...props}
    >
      <path d="M3 21V8L16 3V12H17Q17 11.175 17.587 10.587Q18.175 10 19 10Q19.825 10 20.413 10.587Q21 11.175 21 12V21ZM5 19H7H9V12H14V10V5.9L5 9.375ZM11 19H14V16H16V19H19V14H11ZM7 10ZM15 19ZM15 18.5Z"/>
    </Icon>
  );
});

IconMaterialVillaSharp.displayName = 'AmauiIconMaterialVillaSharp';

export default IconMaterialVillaSharp;
