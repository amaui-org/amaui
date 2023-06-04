import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdOffW100Filled'

      short_name='AdOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m772 908-24-24H172V308l-24-24 20-20 624 624-20 20Zm-572-52h520L200 336v520Zm588-85-28-28V424H441L285 268h503v503Z"/>
    </Icon>
  );
});

IconMaterialAdOffW100Filled.displayName = 'AmauiIconMaterialAdOffW100Filled';

export default IconMaterialAdOffW100Filled;
