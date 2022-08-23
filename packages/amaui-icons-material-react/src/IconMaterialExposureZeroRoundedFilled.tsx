import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureZeroRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureZeroRoundedFilled'
      short_name='ExposureZero'

      {...props}
    >
      <path d="M12 19Q9.5 19 8 17.012Q6.5 15.025 6.5 12Q6.5 8.975 8 6.987Q9.5 5 12 5Q14.5 5 16 6.987Q17.5 8.975 17.5 12Q17.5 15.025 16 17.012Q14.5 19 12 19ZM12 16.95Q13.65 16.95 14.475 15.45Q15.3 13.95 15.3 12Q15.3 10.05 14.475 8.55Q13.65 7.05 12 7.05Q10.35 7.05 9.525 8.55Q8.7 10.05 8.7 12Q8.7 13.95 9.525 15.45Q10.35 16.95 12 16.95Z"/>
    </Icon>
  );
});

IconMaterialExposureZeroRoundedFilled.displayName = 'AmauiIconMaterialExposureZeroRoundedFilled';

export default IconMaterialExposureZeroRoundedFilled;
