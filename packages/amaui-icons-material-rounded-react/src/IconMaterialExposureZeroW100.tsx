import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureZeroW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureZeroW100'

      short_name='ExposureZero'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.65q-1.875 0-2.938-1.613Q8 14.425 8 12t1.062-4.038Q10.125 6.35 12 6.35q1.875 0 2.938 1.612Q16 9.575 16 12q0 2.425-1.062 4.037Q13.875 17.65 12 17.65Zm0-.7q1.65 0 2.475-1.5.825-1.5.825-3.45 0-1.95-.825-3.45-.825-1.5-2.475-1.5-1.65 0-2.475 1.5Q8.7 10.05 8.7 12q0 1.95.825 3.45.825 1.5 2.475 1.5Z"/>
    </Icon>
  );
});

IconMaterialExposureZeroW100.displayName = 'AmauiIconMaterialExposureZeroW100';

export default IconMaterialExposureZeroW100;
