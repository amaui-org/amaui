import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGoogleHomeDevicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleHomeDevicesFilled'

      short_name='GoogleHomeDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80H80v-640h800v160h-80v-80H160v480h280v160H320Zm286-180q0-39 27.5-66.5T700-394q39 0 66.5 27.5T794-300q0 39-27.5 66.5T700-206q-39 0-66.5-27.5T606-300Zm274-340v520H520v-520h360Zm-180 40q-26 0-43 17t-17 43q0 26 17 43t43 17q26 0 43-17t17-43q0-26-17-43t-43-17Zm0 440q59 0 99.5-40.5T840-300q0-59-40.5-99.5T700-440q-59 0-99.5 40.5T560-300q0 59 40.5 99.5T700-160Z"/>
    </Icon>
  );
});

IconMaterialGoogleHomeDevicesFilled.displayName = 'AmauiIconMaterialGoogleHomeDevicesFilled';

export default IconMaterialGoogleHomeDevicesFilled;
