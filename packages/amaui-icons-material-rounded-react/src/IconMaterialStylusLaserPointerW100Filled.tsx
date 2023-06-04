import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylusLaserPointerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylusLaserPointerW100Filled'

      short_name='StylusLaserPointer'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360.118 925Q321 925 293.5 897.618q-27.5-27.383-27.5-66.5Q266 792 293.382 764.5q27.383-27.5 66.5-27.5Q399 737 426.5 764.382q27.5 27.383 27.5 66.5Q454 870 426.618 897.5q-27.383 27.5-66.5 27.5ZM528 786q-8-29-25-54t-41-42l137-135H262q-22 0-36-15.812-14-15.813-14-38.813Q212 486 219 475t18-19l426-269q9-5 19-2.5t15 11q5 8.5 3 18.5t-10 15L311 482h387q21.053 0 35.526 14.474Q748 510.947 748 532q0 13.245-2.5 26.123Q743 571 734 580L528 786Z"/>
    </Icon>
  );
});

IconMaterialStylusLaserPointerW100Filled.displayName = 'AmauiIconMaterialStylusLaserPointerW100Filled';

export default IconMaterialStylusLaserPointerW100Filled;
