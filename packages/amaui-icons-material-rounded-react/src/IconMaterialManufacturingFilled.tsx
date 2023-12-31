import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManufacturingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManufacturingFilled'

      short_name='Manufacturing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M222-540q-12-5-22.5-10.5T178-564l-29 9q-13 4-25.5-1T104-572l-8-14q-7-12-5-26t13-23l22-19q-2-13-2-26t2-26l-22-19q-11-9-13-22.5t5-25.5l9-15q7-11 19-16t25-1l29 9q11-8 21.5-13.5T222-820l6-29q3-14 13.5-22.5T266-880h16q14 0 24.5 9t13.5 23l6 28q12 5 22.5 10.5T370-796l29-9q13-4 25.5 1t19.5 16l8 14q7 12 5 26t-13 23l-22 19q2 13 2 26t-2 26l22 19q11 9 13 22.5t-5 25.5l-9 15q-7 11-19 16t-25 1l-29-9q-11 8-21.5 13.5T326-540l-6 29q-3 14-13.5 22.5T282-480h-16q-14 0-24.5-9T228-512l-6-28Zm52-60q33 0 56.5-23.5T354-680q0-33-23.5-56.5T274-760q-33 0-56.5 23.5T194-680q0 33 23.5 56.5T274-600Zm300 476q-17-6-31.5-14.5T514-158l-38 12q-18 6-36-.5T412-170l-11-19q-10-17-7-36.5t18-32.5l30-26q-2-18-2-36t2-36l-30-27q-15-13-18-32t7-36l11-19q10-17 28-23.5t36-.5l38 12q14-11 28.5-19.5T574-516l9-41q4-19 18.5-31t34.5-12h24q20 0 34.5 12t18.5 31l9 41q17 6 31.5 14.5T782-482l38-12q18-6 36 .5t28 23.5l11 19q10 17 7 36.5T884-382l-30 26q2 18 2 36t-2 36l30 27q15 13 18 32t-7 36l-11 19q-10 17-28 23.5t-36 .5l-38-12q-14 11-28.5 19.5T722-124l-9 41q-4 19-18.5 31T660-40h-24q-20 0-34.5-12T583-83l-9-41Zm74-76q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialManufacturingFilled.displayName = 'AmauiIconMaterialManufacturingFilled';

export default IconMaterialManufacturingFilled;
