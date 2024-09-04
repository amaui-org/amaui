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
      <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.41-160Q558-292 613-347q55-55 55-132.73 0-39.64-14.5-73.46Q639-587 613-613l-20 20q22 22 34.5 51t12.5 62q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-33 12.5-62t34.5-51l-20-20q-26 26-40.5 59.81-14.5 33.82-14.5 73.46Q292-402 346.76-347q54.77 55 133 55ZM466-480h28v-188h-28v188Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsCircleW100Filled.displayName = 'AmauiIconMaterialPowerSettingsCircleW100Filled';

export default IconMaterialPowerSettingsCircleW100Filled;
