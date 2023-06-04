import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassFilled'

      short_name='FlightClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13V4h6v9Zm-4 5L5 8V4h2v4l2.5 8H18v2Zm0 3v-2h10v2Z"/>
    </Icon>
  );
});

IconMaterialFlightClassFilled.displayName = 'AmauiIconMaterialFlightClassFilled';

export default IconMaterialFlightClassFilled;
