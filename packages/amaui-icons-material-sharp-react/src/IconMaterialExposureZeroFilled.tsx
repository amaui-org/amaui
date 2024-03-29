import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureZeroFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureZeroFilled'

      short_name='ExposureZero'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.5 0-4-1.988Q6.5 15.025 6.5 12q0-3.025 1.5-5.013Q9.5 5 12 5t4 1.987Q17.5 8.975 17.5 12T16 17.012Q14.5 19 12 19Zm0-2.05q1.65 0 2.475-1.5.825-1.5.825-3.45 0-1.95-.825-3.45-.825-1.5-2.475-1.5-1.65 0-2.475 1.5Q8.7 10.05 8.7 12q0 1.95.825 3.45.825 1.5 2.475 1.5Z"/>
    </Icon>
  );
});

IconMaterialExposureZeroFilled.displayName = 'AmauiIconMaterialExposureZeroFilled';

export default IconMaterialExposureZeroFilled;
