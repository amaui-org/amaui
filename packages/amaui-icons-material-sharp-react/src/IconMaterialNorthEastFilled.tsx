import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthEastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthEastFilled'

      short_name='NorthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 20 4 18.6 15.6 7H9V5h10v10h-2V8.4Z"/>
    </Icon>
  );
});

IconMaterialNorthEastFilled.displayName = 'AmauiIconMaterialNorthEastFilled';

export default IconMaterialNorthEastFilled;
