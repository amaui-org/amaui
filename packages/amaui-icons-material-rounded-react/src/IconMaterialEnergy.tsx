import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Energy'

      short_name='Energy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80v-40q0-32 24-53.5t56-26.5v-286q-22-8-38.5-23T374-544l-76 20q-36 8-68.5-6T188-578l174-44q8-41 38-68t72-30l24-90q10-35 38.5-55.5T598-878l-50 180q25 16 38.5 42t13.5 56q0 13-3 25.5t-7 24.5l54 56q25 26 29.5 61T654-374L534-494q-3 3-6.5 4.5T520-486v286q32 5 56 26.5t24 53.5v40H360Zm120-460q25 0 42.5-17.5T540-600q0-25-17.5-42.5T480-660q-25 0-42.5 17.5T420-600q0 25 17.5 42.5T480-540Z"/>
    </Icon>
  );
});

IconMaterialEnergy.displayName = 'AmauiIconMaterialEnergy';

export default IconMaterialEnergy;
