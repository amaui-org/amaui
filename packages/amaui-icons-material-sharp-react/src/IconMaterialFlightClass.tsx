import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClass'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13V4h6v9Zm2-2h2V6h-2Zm-6 7L5 8V4h2v4l2.5 8H18v2Zm0 3v-2h10v2Zm6-15h2Z"/>
    </Icon>
  );
});

IconMaterialFlightClass.displayName = 'AmauiIconMaterialFlightClass';

export default IconMaterialFlightClass;
