import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldQuestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldQuestionW100Filled'

      short_name='ShieldQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm-2-170q9 0 15.5-6.5T500-326q0-9-6.5-15.5T478-348q-9 0-15.5 6.5T456-326q0 9 6.5 15.5T478-304Zm-14-106h28q1-10 3-20t7-18q7-10 14.5-19t15.5-17q17-18 30.5-37.5T576-568q0-37-28-61.5T482-654q-32 0-58.5 16.5T384-592l26 11q10-21 29.5-33t42.5-12q26 0 46 16t20 42q0 20-12 37t-26 31q-11 10-20 21t-16 24q-5 11-7.5 22t-2.5 23Z"/>
    </Icon>
  );
});

IconMaterialShieldQuestionW100Filled.displayName = 'AmauiIconMaterialShieldQuestionW100Filled';

export default IconMaterialShieldQuestionW100Filled;
