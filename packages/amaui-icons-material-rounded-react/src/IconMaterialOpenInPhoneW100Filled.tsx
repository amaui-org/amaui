import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhoneW100Filled'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-92q-26 0-43-17t-17-43v-208h28v146h400v-532H280v146h-28v-208q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm158-374H120q-6 0-10-4t-4-10q0-6 4-10t10-4h350l-80-80q-4-4-4.5-9.5T390-594q5-5 10-5t10 5l93 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 4.5T390-366q-5-5-5-10t5-10l80-80Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhoneW100Filled.displayName = 'AmauiIconMaterialOpenInPhoneW100Filled';

export default IconMaterialOpenInPhoneW100Filled;
