import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbShadeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeFilled'

      short_name='WbShade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 20 14 14.5V12l8 8ZM14 20v-3l3 3ZM4 20V10H2l6-6 6 6h-2v10Zm3-6h2v-4H7Z"/>
    </Icon>
  );
});

IconMaterialWbShadeFilled.displayName = 'AmauiIconMaterialWbShadeFilled';

export default IconMaterialWbShadeFilled;
