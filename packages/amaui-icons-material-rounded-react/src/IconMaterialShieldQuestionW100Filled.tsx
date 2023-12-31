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
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm-2-170q9 0 15.5-6.5T500-326q0-9-6.5-15.5T478-348q-9 0-15.5 6.5T456-326q0 9 6.5 15.5T478-304Zm3-113q5 0 9-4t5-9q2-7 4.5-13t6.5-11q6-8 12.5-15.5T532-484q17-18 30.5-38.5T576-568q0-37-28-61.5T482-654q-28 0-52 13t-39 36q-3 5-1 10.5t7 7.5q5 2 10.5.5t9.5-6.5q11-16 28-24.5t37-8.5q26 0 46 16t20 42q0 20-11.5 37T510-500q-9 8-16.5 17T479-463q-5 8-9 15t-4 16q0 6 4.5 10.5T481-417Z"/>
    </Icon>
  );
});

IconMaterialShieldQuestionW100Filled.displayName = 'AmauiIconMaterialShieldQuestionW100Filled';

export default IconMaterialShieldQuestionW100Filled;
