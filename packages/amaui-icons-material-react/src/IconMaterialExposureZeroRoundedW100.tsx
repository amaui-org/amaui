import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureZeroRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureZeroRoundedW100'
      short_name='ExposureZero'

      {...props}
    >
      <path d="M12 17.65Q10.125 17.65 9.062 16.037Q8 14.425 8 12Q8 9.575 9.062 7.962Q10.125 6.35 12 6.35Q13.875 6.35 14.938 7.962Q16 9.575 16 12Q16 14.425 14.938 16.037Q13.875 17.65 12 17.65ZM12 16.95Q13.65 16.95 14.475 15.45Q15.3 13.95 15.3 12Q15.3 10.05 14.475 8.55Q13.65 7.05 12 7.05Q10.35 7.05 9.525 8.55Q8.7 10.05 8.7 12Q8.7 13.95 9.525 15.45Q10.35 16.95 12 16.95Z"/>
    </Icon>
  );
});

IconMaterialExposureZeroRoundedW100.displayName = 'AmauiIconMaterialExposureZeroRoundedW100';

export default IconMaterialExposureZeroRoundedW100;
