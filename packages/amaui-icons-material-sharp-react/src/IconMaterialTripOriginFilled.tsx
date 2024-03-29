import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripOriginFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOriginFilled'

      short_name='TripOrigin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.05 0-3.875-.788-1.825-.787-3.187-2.15-1.363-1.362-2.15-3.187Q2 14.05 2 12q0-2.075.788-3.887.787-1.813 2.15-3.175Q6.3 3.575 8.125 2.787 9.95 2 12 2q2.075 0 3.887.787 1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.15 3.187-1.362 1.363-3.175 2.15Q14.075 22 12 22Zm0-4q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Z"/>
    </Icon>
  );
});

IconMaterialTripOriginFilled.displayName = 'AmauiIconMaterialTripOriginFilled';

export default IconMaterialTripOriginFilled;
