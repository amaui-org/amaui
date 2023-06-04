import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayW100Filled'

      short_name='Airplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.55 19.7 12 16.25l3.45 3.45Zm-5.25-2V4.3h17.4v13.4h-4L12 13l-4.7 4.7Z"/>
    </Icon>
  );
});

IconMaterialAirplayW100Filled.displayName = 'AmauiIconMaterialAirplayW100Filled';

export default IconMaterialAirplayW100Filled;
