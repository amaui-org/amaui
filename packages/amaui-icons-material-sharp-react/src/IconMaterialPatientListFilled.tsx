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
      <path d="M640 656q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM400 896v-76q0-21 10-40t28-30q45-27 95.5-40.5T640 696q56 0 106.5 13.5T842 750q18 11 28 30t10 40v76H400ZM120 656v-80h320v80H120Zm0-320v-80h480v80H120Zm324 160H120v-80h360q-14 17-22.5 37T444 496Z"/>
    </Icon>
  );
});

IconMaterialPatientListFilled.displayName = 'AmauiIconMaterialPatientListFilled';

export default IconMaterialPatientListFilled;
