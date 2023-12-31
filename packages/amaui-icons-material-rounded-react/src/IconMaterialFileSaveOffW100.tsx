import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileSaveOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileSaveOffW100'

      short_name='FileSaveOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m799-236-19-20 34-34q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10l-34 34Zm-65-66-28-28v-69q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v97Zm96 248L214-670v424q0 12 10 22t22 10h226q5.95 0 9.975 4.035 4.025 4.035 4.025 10T481.975-190q-4.025 4-9.975 4H246q-24 0-42-18t-18-42v-452L74-811q-3.667-3.75-3.833-9.375Q70-826 74-830.174 77.667-834 83.333-834 89-834 93-830L865-58q1.667 1.74 2.833 4.522Q869-50.696 869-47.913v8Q869-34 864.975-30T855-26H600q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T590.025-50q4.025-4 9.975-4h230ZM706-626v99q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975v-88q0-12.444-5-23.722T716-658L538-836q-8-8-19.278-13-11.278-5-23.722-5H246q-13 0-24.5 5.5T202-834l20 20q5-5 11-8.5t13-3.5h260v155q0 18.75 13.125 31.875T551-626h155ZM413-471Zm73-79Z"/>
    </Icon>
  );
});

IconMaterialFileSaveOffW100.displayName = 'AmauiIconMaterialFileSaveOffW100';

export default IconMaterialFileSaveOffW100;
