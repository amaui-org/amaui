import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedCameraW100'

      short_name='SpeedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M681-408q-7-4-7.5-12t6.5-13l56-41q8-5 16.5-5.5T769-475q7 4 7 11.5t-6 12.5l-56 42q-8 5-16.5 5.5T681-408Zm-135-37 140-101-309-169q-11-6-23.5-3T334-704l-47 79q-7 12-3.5 25t15.5 20l247 135Zm-64-139ZM226-212q-6 0-10-4t-4-10q0-6 4-10t10-4h144q14 0 23-9t9-23v-220l-116-64q-23-12-29.5-36.5T263-639l46-77q12-21 35.5-27.5T389-738l306 167q14 8 15.5 24.5T698-520l-119 86q-14 10-31.5 11t-32.5-7l-86-47v205q0 25-17.5 42.5T369-212H226Z"/>
    </Icon>
  );
});

IconMaterialSpeedCameraW100.displayName = 'AmauiIconMaterialSpeedCameraW100';

export default IconMaterialSpeedCameraW100;
