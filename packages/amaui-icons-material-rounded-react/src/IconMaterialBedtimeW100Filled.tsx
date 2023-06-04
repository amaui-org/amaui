import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeW100Filled'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.425 18.85q-1.1.875-2.513 1.362Q13.5 20.7 12 20.7q-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-2.775 1.513-4.95Q6.35 4.875 8.8 3.925q.425-.175.675.05.25.225.15.725-.425 2.175-.087 4.212.337 2.038 1.325 3.763.987 1.725 2.587 3.037 1.6 1.313 3.7 2.013.475.15.55.5.075.35-.275.625Z"/>
    </Icon>
  );
});

IconMaterialBedtimeW100Filled.displayName = 'AmauiIconMaterialBedtimeW100Filled';

export default IconMaterialBedtimeW100Filled;
