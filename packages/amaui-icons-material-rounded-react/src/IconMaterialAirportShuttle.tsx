import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirportShuttle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirportShuttle'

      short_name='AirportShuttle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-1.25 0-2.125-.875T3 16q-.825 0-1.412-.588Q1 14.825 1 14V7q0-.825.588-1.412Q2.175 5 3 5h13.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V14q0 .825-.587 1.412Q21.825 16 21 16q0 1.25-.875 2.125T18 19q-1.25 0-2.125-.875T15 16H9q0 1.25-.875 2.125T6 19Zm9-9h4l-3-3h-1Zm-6 0h4V7H9Zm-6 0h4V7H3Zm3 7.25q.525 0 .888-.363.362-.362.362-.887t-.362-.887Q6.525 14.75 6 14.75t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363Zm12 0q.525 0 .888-.363.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.887.363q-.363.362-.363.887t.363.887q.362.363.887.363ZM3 14h.8q.425-.45.975-.725Q5.325 13 6 13t1.225.275q.55.275.975.725h7.6q.425-.45.975-.725Q17.325 13 18 13t1.225.275q.55.275.975.725h.8v-2H3v2Zm0-2h18H3.8Z"/>
    </Icon>
  );
});

IconMaterialAirportShuttle.displayName = 'AmauiIconMaterialAirportShuttle';

export default IconMaterialAirportShuttle;
