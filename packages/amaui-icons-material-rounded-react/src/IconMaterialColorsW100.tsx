import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorsW100'

      short_name='Colors'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M348-190 150-388q-9-9-13.5-20t-4.5-23q0-11 4.5-22t13.5-20l220-220-107-103q-5-5-5-11t5-11q5-5 11-5t11 5l345 346q9 9 13.5 20t4.5 22q0 12-4.5 23T630-387L433-190q-9 9-20 13.5t-22 4.5q-12 0-23-4.5T348-190Zm42-483L170-453q-6 6-8 12t-2 12h460q0-6-2-12t-8-12L390-673Zm377 501q-26 0-43-18t-17-44q0-20 8-39t22-35l13-16q7-8 17-8t17 8l15 16q14 16 22 35t8 39q0 26-18 44t-44 18Z"/>
    </Icon>
  );
});

IconMaterialColorsW100.displayName = 'AmauiIconMaterialColorsW100';

export default IconMaterialColorsW100;
