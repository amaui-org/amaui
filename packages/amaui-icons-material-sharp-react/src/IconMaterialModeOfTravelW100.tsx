import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeOfTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravelW100'

      short_name='ModeOfTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.15q-3.7-3.225-5.525-5.937Q4.65 12.5 4.65 10.2q0-3.45 2.225-5.5T12 2.65q3.275 0 5.5 2.375t1.85 6.75l2.75-2.75.475.475L19 13.075 15.425 9.5l.475-.475 2.75 2.75q.375-3.9-1.537-6.163Q15.2 3.35 12 3.35q-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.625 4.413Q8.6 17.125 12 20.225q.5-.45 1.262-1.187.763-.738 1.188-1.163-.25-.325-.35-.675-.1-.35-.1-.7 0-.825.588-1.413.587-.587 1.412-.587t1.413.587Q18 15.675 18 16.5q0 .825-.587 1.413-.588.587-1.413.587-.25 0-.525-.05T15 18.275q-.675.7-1.438 1.425-.762.725-1.562 1.45Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravelW100.displayName = 'AmauiIconMaterialModeOfTravelW100';

export default IconMaterialModeOfTravelW100;
