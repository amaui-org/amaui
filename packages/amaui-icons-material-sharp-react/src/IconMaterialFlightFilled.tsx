import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightFilled'

      short_name='Flight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 22v-1.5l2-1.5v-5.5L2 16v-2l8.5-5V3.5q0-.65.425-1.075Q11.35 2 12 2q.65 0 1.075.425.425.425.425 1.075V9l8.5 5v2l-8.5-2.5V19l2 1.5V22L12 21Z"/>
    </Icon>
  );
});

IconMaterialFlightFilled.displayName = 'AmauiIconMaterialFlightFilled';

export default IconMaterialFlightFilled;
