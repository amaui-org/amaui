import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarTagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarTagFilled'

      short_name='CarTag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M140-120q-25 0-42.5-17.5T80-180v-286q0-7 1-14t3-13l80-227q6-18 21.5-29t34.5-11h100q17 0 28.5 11.5T360-720q0 17-11.5 28.5T320-680h-86l-42 120h222q16 0 30.5 6t25.5 17l111 111q-10 8-15.5 20t-5.5 26q0 25 17.5 42.5T620-320q20 0 36-12t21-31q11 2 21.5 2.5t21.5-.5q7-1 13-2t13-3q20-6 37 3t17 28v155q0 25-17.5 42.5T740-120q-25 0-42.5-17.5T680-180v-20H200v20q0 25-17.5 42.5T140-120Zm120-200q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm340-400q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Zm62 262L458-662q-8-8-13-19.5t-5-23.5v-155q0-25 17.5-42.5T500-920h155q12 0 23.5 5t19.5 13l204 204q17 17 17 42.5T902-613L747-458q-17 17-42.5 17T662-458Z"/>
    </Icon>
  );
});

IconMaterialCarTagFilled.displayName = 'AmauiIconMaterialCarTagFilled';

export default IconMaterialCarTagFilled;
