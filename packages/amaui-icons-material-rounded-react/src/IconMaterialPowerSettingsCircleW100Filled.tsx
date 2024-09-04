import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsCircleW100Filled'

      short_name='PowerSettingsCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.41-160Q558-292 613-346.83q55-54.84 55-133.17 0-33.57-11-63.79Q646-574 626-598q-5-6-10.5-6.5T605-602q-5 3-6 8.5t3 10.5q18 21 28 47.56 10 26.57 10 55.44 0 66-47 113t-113 47q-66 0-113-47t-47-113q0-30 10-57t29-48q4-5 3-10t-6-8q-5-3-11.1-2.3-6.1.69-10.9 7.3-20 24-31 54t-11 64q0 78.33 54.76 133.17 54.77 54.83 133 54.83Zm.2-376q-5.96 0-9.96 4.03-4 4.02-4 9.97v160q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-160q0-5.95-4.04-9.97-4.03-4.03-10-4.03Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsCircleW100Filled.displayName = 'AmauiIconMaterialPowerSettingsCircleW100Filled';

export default IconMaterialPowerSettingsCircleW100Filled;
