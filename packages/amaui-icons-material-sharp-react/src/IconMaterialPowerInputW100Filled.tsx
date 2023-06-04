import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputW100Filled'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 14.35v-.7h3.7v.7Zm7 0v-.7h3.7v.7Zm7 0v-.7h3.7v.7Zm-14-4v-.7h17.7v.7Z"/>
    </Icon>
  );
});

IconMaterialPowerInputW100Filled.displayName = 'AmauiIconMaterialPowerInputW100Filled';

export default IconMaterialPowerInputW100Filled;
