import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFortSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FortSharp'
      short_name='Fort'

      {...props}
    >
      <path d="M1 21V17L3 15V9L1 7V3H3V5H5V3H7V5H9V3H11V7L9 9V10H15V9L13 7V3H15V5H17V3H19V5H21V3H23V7L21 9V15L23 17V21H14V16H10V21ZM3 19H8V14H16V19H21V17.825L19 15.825V8.175L20.175 7H15.825L17 8.175V12H7V8.175L8.175 7H3.825L5 8.175V15.825L3 17.825ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialFortSharp.displayName = 'AmauiIconMaterialFortSharp';

export default IconMaterialFortSharp;
