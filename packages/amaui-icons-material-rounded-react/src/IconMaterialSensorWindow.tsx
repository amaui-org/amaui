import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindow'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-11h4v-1h4v1h4V4H6Zm0 2v7h12v-7Zm0 7h12H6Z"/>
    </Icon>
  );
});

IconMaterialSensorWindow.displayName = 'AmauiIconMaterialSensorWindow';

export default IconMaterialSensorWindow;
