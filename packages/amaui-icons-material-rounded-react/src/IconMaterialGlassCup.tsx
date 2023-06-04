import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlassCup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCup'

      short_name='GlassCup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Zm409-160H271l9 80h400l9-80ZM209 256l53 480h436l52-480H209Zm471 640H280h400Z"/>
    </Icon>
  );
});

IconMaterialGlassCup.displayName = 'AmauiIconMaterialGlassCup';

export default IconMaterialGlassCup;
