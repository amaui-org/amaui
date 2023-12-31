import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAlertW100Filled'

      short_name='BrightnessAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-308q8.5 0 14.25-5.75T500-328q0-8.5-5.75-14.25T480-348q-8.5 0-14.25 5.75T460-328q0 8.5 5.75 14.25T480-308Zm.035-124q5.965 0 9.965-4.025t4-9.975v-212q0-5.95-4.035-9.975-4.035-4.025-10-4.025T470-667.975q-4 4.025-4 9.975v212q0 5.95 4.035 9.975 4.035 4.025 10 4.025ZM459-121l-91.278-91H242q-12.75 0-21.375-8.625T212-242v-125.722L121-459q-9-9-9-21t9-21l91-91.278V-718q0-12.75 8.625-21.375T242-748h125.722L459-839q9-9 21-9t21 9l91.278 91H718q12.75 0 21.375 8.625T748-718v125.722L839-501q9 9 9 21t-9 21l-91 91.278V-242q0 12.75-8.625 21.375T718-212H592.278L501-121q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAlertW100Filled.displayName = 'AmauiIconMaterialBrightnessAlertW100Filled';

export default IconMaterialBrightnessAlertW100Filled;
