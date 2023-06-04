import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeOfTravelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravelW100Filled'

      short_name='ModeOfTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.875q-.15 0-.275-.038-.125-.037-.25-.137-3.425-3.075-5.125-5.675-1.7-2.6-1.7-4.825 0-3.45 2.225-5.5T12 2.65q3.275 0 5.5 2.375t1.85 6.75l2.525-2.525q.1-.1.225-.1t.25.1q.1.125.1.25t-.1.225l-2.825 2.825q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L15.65 9.725q-.1-.1-.1-.225t.125-.25q.1-.1.225-.1t.25.1l2.5 2.525q.375-3.9-1.537-6.163Q15.2 3.35 12 3.35q-2.8 0-4.725 1.912Q5.35 7.175 5.35 10.2q0 1.9 1.625 4.413Q8.6 17.125 12 20.225q.5-.45 1.262-1.187.763-.738 1.188-1.163-.25-.325-.35-.675-.1-.35-.1-.7 0-.825.588-1.413.587-.587 1.412-.587t1.413.587Q18 15.675 18 16.5q0 .825-.587 1.413-.588.587-1.413.587-.25 0-.525-.05T15 18.275q-.575.575-1.212 1.175-.638.6-1.288 1.225-.1.1-.238.15-.137.05-.262.05Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravelW100Filled.displayName = 'AmauiIconMaterialModeOfTravelW100Filled';

export default IconMaterialModeOfTravelW100Filled;
