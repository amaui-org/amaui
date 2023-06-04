import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbientScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreenW100'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v213q0 6-4 10t-10 4q-6 0-10-4t-4-10V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h373q6 0 10 4t4 10q0 6-4 10t-10 4H192Zm556-16-40-18q-9-4-9-14t9-14l40-18 18-40q4-9 14-9t14 9l18 40 40 18q9 4 9 14t-9 14l-40 18-18 40q-4 9-14 9t-14-9l-18-40Zm-588-12V336v480-20 20Zm280-200 26 59q4 9 14 9t14-9l26-59 59-26q9-4 9-14t-9-14l-59-26-26-59q-4-9-14-9t-14 9l-26 59-59 26q-9 4-9 14t9 14l59 26Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreenW100.displayName = 'AmauiIconMaterialAmbientScreenW100';

export default IconMaterialAmbientScreenW100;
