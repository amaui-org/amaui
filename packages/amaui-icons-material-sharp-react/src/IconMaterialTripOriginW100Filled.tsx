import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTripOriginW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOriginW100Filled'

      short_name='TripOrigin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-1.65q2.95 0 5-2.062 2.05-2.063 2.05-4.988 0-2.95-2.05-5t-5-2.05Q9.075 4.95 7.013 7 4.95 9.05 4.95 12q0 2.925 2.063 4.988Q9.075 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialTripOriginW100Filled.displayName = 'AmauiIconMaterialTripOriginW100Filled';

export default IconMaterialTripOriginW100Filled;
