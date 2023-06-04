import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlassCupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlassCupFilled'

      short_name='GlassCup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 976q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Zm-71-720 53 480h436l52-480H209Z"/>
    </Icon>
  );
});

IconMaterialGlassCupFilled.displayName = 'AmauiIconMaterialGlassCupFilled';

export default IconMaterialGlassCupFilled;
