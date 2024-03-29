import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentPatientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientFilled'

      short_name='RecentPatient'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 896H240q-33 0-56.5-23.5T160 816v-32q0-34 17.5-62.5T224 678q62-31 126-46.5T480 616q20 0 40 1.5t40 4.5v274Zm-80-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 280h-40q-17 0-28.5-11.5T640 816V656q0-17 11.5-28.5T680 616h151q17 0 26 14t1 29l-58 117h28q17 0 25.5 15t.5 30l-115 202q-4 7-11.5 5t-7.5-10V856Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientFilled.displayName = 'AmauiIconMaterialRecentPatientFilled';

export default IconMaterialRecentPatientFilled;
