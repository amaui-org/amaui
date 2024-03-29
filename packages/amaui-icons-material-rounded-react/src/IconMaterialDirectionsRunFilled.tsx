import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRunFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunFilled'

      short_name='DirectionsRun'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM14 23q-.425 0-.712-.288Q13 22.425 13 22v-5l-2.1-2-.575 2.5q-.2.8-.875 1.238-.675.437-1.475.262L4 18.2q-.425-.075-.662-.425Q3.1 17.425 3.2 17q.075-.425.425-.663.35-.237.775-.137l3.8.8 1.6-8.1-1.8.7V12q0 .425-.287.712Q7.425 13 7 13t-.713-.288Q6 12.425 6 12V9.625q0-.6.325-1.113Q6.65 8 7.2 7.775L9.95 6.6q.875-.375 1.288-.488Q11.65 6 12 6q.525 0 .975.275.45.275.725.725l1 1.6q.55.875 1.438 1.5.887.625 2.012.825.375.05.613.325.237.275.237.625 0 .475-.337.8-.338.325-.788.25-1.325-.2-2.45-.838Q14.3 11.45 13.5 10.5l-.6 3 1.475 1.4q.3.3.463.662.162.363.162.788V22q0 .425-.287.712Q14.425 23 14 23Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunFilled.displayName = 'AmauiIconMaterialDirectionsRunFilled';

export default IconMaterialDirectionsRunFilled;
