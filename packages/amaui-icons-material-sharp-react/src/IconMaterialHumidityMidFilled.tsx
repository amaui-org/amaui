import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityMidFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityMidFilled'

      short_name='HumidityMid'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-3.325 0-5.662-2.3Q4 16.9 4 13.625q0-1.65.625-3.063Q5.25 9.15 6.35 8.05L12 2.5l5.65 5.55q1.1 1.1 1.725 2.512.625 1.413.625 3.063 0 3.275-2.337 5.575-2.338 2.3-5.663 2.3Zm0-16.2L7.75 9.5q-.75.725-1.188 1.613-.437.887-.537 1.937h11.95q-.1-1.05-.537-1.937Q17 10.225 16.25 9.5Z"/>
    </Icon>
  );
});

IconMaterialHumidityMidFilled.displayName = 'AmauiIconMaterialHumidityMidFilled';

export default IconMaterialHumidityMidFilled;
