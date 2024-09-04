import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOffW100Filled'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h20l208 208q-14 27-21 57.5t-7 62.5v120q0 14 1.5 26.5T398-247q3 14-5 24.5T371-212H192Zm468-476q-57 0-106.5 22.5T467-605l-92-92q-14-14-6.5-32.5T396-748h372q26 0 43 17t17 43v17q0 14-12 20t-23-2q-30-17-63.5-26t-69.5-9Zm14 274v-174q66 6 110 56t44 118H674Zm-28-174v162L538-534q20-23 48-37t60-17Zm175 337L686-386h142v86q0 13-1.5 25.5T821-251ZM660-132q-70 0-119-49t-49-119v-86h42L100-820q-4-4-4.5-9.5T100-840q5-5 10-5t10 5L862-98q4 4 4.5 9.5T862-78q-5 5-10 5t-10-5l-85-85q-20 14-45 22.5t-52 8.5Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOffW100Filled.displayName = 'AmauiIconMaterialTouchpadMouseOffW100Filled';

export default IconMaterialTouchpadMouseOffW100Filled;
