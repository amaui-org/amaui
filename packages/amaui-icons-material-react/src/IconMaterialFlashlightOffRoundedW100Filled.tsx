import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashlightOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOffRoundedW100Filled'
      short_name='FlashlightOff'

      {...props}
    >
      <path d="M10.125 20.7Q9.5 20.7 9.062 20.262Q8.625 19.825 8.625 19.2V10.3L2.825 4.5Q2.7 4.375 2.7 4.25Q2.7 4.125 2.825 4Q2.95 3.875 3.088 3.875Q3.225 3.875 3.325 4L19.775 20.45Q19.9 20.55 19.9 20.688Q19.9 20.825 19.775 20.95Q19.675 21.05 19.538 21.05Q19.4 21.05 19.275 20.95L14.025 15.7V19.2Q14.025 19.825 13.588 20.262Q13.15 20.7 12.525 20.7ZM14.025 11.85 8.525 6.35H16.025V7.6L14.025 10.6ZM16.025 5.65H7.825L6.65 4.475Q6.775 3.975 7.175 3.637Q7.575 3.3 8.125 3.3H14.525Q15.15 3.3 15.588 3.737Q16.025 4.175 16.025 4.8Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOffRoundedW100Filled.displayName = 'AmauiIconMaterialFlashlightOffRoundedW100Filled';

export default IconMaterialFlashlightOffRoundedW100Filled;
