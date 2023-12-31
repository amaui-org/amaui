import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTransmissionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTransmissionFilled'

      short_name='AutoTransmission'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-254q-35-12-57.5-43T40-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T200-607v87h240v-87q-35-12-57.5-43T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-607v87h240v-87q-35-12-57.5-43T680-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-607v167H520v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87H200v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialAutoTransmissionFilled.displayName = 'AmauiIconMaterialAutoTransmissionFilled';

export default IconMaterialAutoTransmissionFilled;
