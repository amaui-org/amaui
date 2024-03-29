import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSatelliteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteFilled'

      short_name='Satellite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.85 11.95q2-.275 3.412-1.688Q11.675 8.85 11.95 6.85q.05-.35-.188-.6Q11.525 6 11.15 6q-.325 0-.588.25-.262.25-.337.6-.25 1.275-1.175 2.2-.925.925-2.2 1.175-.35.075-.6.325t-.25.6q0 .35.25.6t.6.2Zm-.35-3.4q.775-.15 1.312-.713.538-.562.688-1.337.05-.2-.1-.35Q8.25 6 8.05 6H6.5q-.2 0-.35.15Q6 6.3 6 6.5v1.6q0 .2.15.35.15.15.35.1ZM7 17h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16 9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 17 7 17Zm-2 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSatelliteFilled.displayName = 'AmauiIconMaterialSatelliteFilled';

export default IconMaterialSatelliteFilled;
