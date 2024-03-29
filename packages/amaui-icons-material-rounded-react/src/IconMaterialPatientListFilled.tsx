import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPatientListFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatientListFilled'

      short_name='PatientList'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 656q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440 896q-17 0-28.5-11.5T400 856v-36q0-21 10-40t28-30q45-27 95.5-40.5T640 696q56 0 106.5 13.5T842 750q18 11 28 30t10 40v36q0 17-11.5 28.5T840 896H440Zm-40-240H160q-17 0-28.5-11.5T120 616q0-17 11.5-28.5T160 576h240q17 0 28.5 11.5T440 616q0 17-11.5 28.5T400 656Zm160-320H160q-17 0-28.5-11.5T120 296q0-17 11.5-28.5T160 256h400q17 0 28.5 11.5T600 296q0 17-11.5 28.5T560 336ZM444 496H160q-17 0-28.5-11.5T120 456q0-17 11.5-28.5T160 416h320q-14 17-22.5 37T444 496Z"/>
    </Icon>
  );
});

IconMaterialPatientListFilled.displayName = 'AmauiIconMaterialPatientListFilled';

export default IconMaterialPatientListFilled;
