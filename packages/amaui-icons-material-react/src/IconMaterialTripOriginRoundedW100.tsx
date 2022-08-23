import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTripOriginRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TripOriginRoundedW100'
      short_name='TripOrigin'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 19.05Q14.95 19.05 17 16.988Q19.05 14.925 19.05 12Q19.05 9.05 17 7Q14.95 4.95 12 4.95Q9.075 4.95 7.013 7Q4.95 9.05 4.95 12Q4.95 14.925 7.013 16.988Q9.075 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialTripOriginRoundedW100.displayName = 'AmauiIconMaterialTripOriginRoundedW100';

export default IconMaterialTripOriginRoundedW100;
