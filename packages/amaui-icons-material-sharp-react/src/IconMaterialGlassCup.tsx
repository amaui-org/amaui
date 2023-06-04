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
      <path d="m208 976-88-800h720l-88 800H208Zm72-80h400l9-80H271l9 80Zm-18-160h436l52-480H209l53 480Zm18 160h400-400Z"/>
    </Icon>
  );
});

IconMaterialGlassCup.displayName = 'AmauiIconMaterialGlassCup';

export default IconMaterialGlassCup;
