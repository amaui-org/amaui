import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffW100Filled'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480q0-62 21-119.5T215-705l-79-79q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5l-79-79q-48 41-105.5 62T480-132ZM360-306h254l-28-28H360q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm120-522q72.21 0 135.72 27.41 63.51 27.4 110.49 74.38t74.38 110.49Q828-552.21 828-480q0 36-7 70.71-7 34.72-21 67.29-4.64 10.89-13.54 15.94-8.89 5.06-19.72 5.06-7.74 0-14.32-2.57-6.57-2.56-12.42-8.43L548-524q-5-4.64-5-10.82 0-6.18 5-11.18l70-70q5-5 5-10t-5-10q-5-5-10-5t-10 5l-70 70q-4.64 5-10.82 5-6.18 0-11.18-5L332-740q-5.87-5.92-8.43-12.58-2.57-6.66-2.57-14.06 0-10.36 5.5-19.36t15.5-14q32.57-14 67.29-21 34.71-7 70.71-7Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffW100Filled.displayName = 'AmauiIconMaterialOfflinePinOffW100Filled';

export default IconMaterialOfflinePinOffW100Filled;
