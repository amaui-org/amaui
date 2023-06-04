import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataSaverOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnW100Filled'

      short_name='DataSaverOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm8.35.05-.6-.35q.275-.575.437-1.375Q20 12.875 20 12q0-3.025-1.987-5.3Q16.025 4.425 13 4.05v-.7q3.25.3 5.475 2.812Q20.7 8.675 20.7 12q0 .95-.175 1.812-.175.863-.525 1.588Zm-8 5.3q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-3.275 2.138-5.75Q7.575 3.775 11 3.35v.7q-3.125.425-5.062 2.712Q4 9.05 4 12q0 3.325 2.338 5.663Q8.675 20 12 20q1.95 0 3.663-.875 1.712-.875 2.737-2.275l.6.4q-1.275 1.65-3.075 2.55-1.8.9-3.925.9Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOnW100Filled.displayName = 'AmauiIconMaterialDataSaverOnW100Filled';

export default IconMaterialDataSaverOnW100Filled;
