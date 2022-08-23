import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnRoundedW100'
      short_name='FlashOn'

      {...props}
    >
      <path d="M11.025 20.6Q10.875 20.875 10.575 20.788Q10.275 20.7 10.275 20.4V14H8.375Q8.05 14 7.838 13.787Q7.625 13.575 7.625 13.25V4.25Q7.625 3.925 7.838 3.712Q8.05 3.5 8.375 3.5H15.225Q15.65 3.5 15.863 3.837Q16.075 4.175 15.9 4.55L12.875 11.35H15.075Q15.5 11.35 15.725 11.725Q15.95 12.1 15.725 12.475Z"/>
    </Icon>
  );
});

IconMaterialFlashOnRoundedW100.displayName = 'AmauiIconMaterialFlashOnRoundedW100';

export default IconMaterialFlashOnRoundedW100;
