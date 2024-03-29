import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirportShuttleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttleFilled'

      short_name='AirportShuttle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-1.25 0-2.125-.875T3 16H1V5h16l6 6v5h-2q0 1.25-.875 2.125T18 19q-1.25 0-2.125-.875T15 16H9q0 1.25-.875 2.125T6 19Zm9-9h4l-3-3h-1Zm-6 0h4V7H9Zm-6 0h4V7H3Zm3 7.25q.525 0 .888-.363.362-.362.362-.887t-.362-.887Q6.525 14.75 6 14.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm12 0q.525 0 .888-.363.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttleFilled.displayName = 'AmauiIconMaterialAirportShuttleFilled';

export default IconMaterialAirportShuttleFilled;
