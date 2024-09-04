import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiagonalLineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiagonalLineW100'

      short_name='DiagonalLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M739.76-132q-36.76 0-62.26-25.67Q652-183.33 652-220q0-15 4.5-28t12.5-24L272-669q-11 8-24 12.5t-28 4.5q-36.67 0-62.33-25.74Q132-703.47 132-740.24q0-36.76 25.74-62.26 25.73-25.5 62.5-25.5 36.76 0 62.26 25.67Q308-776.67 308-740q0 14.35-4 27.67Q300-699 292-688l396 396q11-8 24.33-12 13.32-4 27.67-4 36.67 0 62.33 25.74Q828-256.53 828-219.76q0 36.76-25.74 62.26-25.73 25.5-62.5 25.5Z"/>
    </Icon>
  );
});

IconMaterialDiagonalLineW100.displayName = 'AmauiIconMaterialDiagonalLineW100';

export default IconMaterialDiagonalLineW100;
