import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkFilled'

      short_name='DirectionsWalk'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM8.325 23q-.55 0-.875-.387-.325-.388-.2-.913L9.8 8.9 8 9.6V12q0 .425-.287.712Q7.425 13 7 13t-.713-.288Q6 12.425 6 12V9.625q0-.6.325-1.1.325-.5.9-.75L11.05 6.15q.725-.3 1.475-.063.75.238 1.175.913l1 1.6q.55.875 1.425 1.5t2 .825q.375.05.625.337.25.288.25.638 0 .475-.337.788-.338.312-.763.237-1.325-.2-2.462-.838Q14.3 11.45 13.5 10.5l-.6 3 1.475 1.4q.3.3.463.662.162.363.162.788V22q0 .425-.287.712Q14.425 23 14 23t-.712-.288Q13 22.425 13 22v-5l-2.1-2-1.625 7.25q-.075.3-.337.525-.263.225-.613.225Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkFilled.displayName = 'AmauiIconMaterialDirectionsWalkFilled';

export default IconMaterialDirectionsWalkFilled;
