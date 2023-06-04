import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassBottomW100'

      short_name='HourglassBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11.3q1.6 0 2.6-1.3t1-3V4H8.4v3q0 1.7 1 3t2.6 1.3Zm-6.45 9.4V20H7.7v-3q0-1.8 1.038-3.213Q9.775 12.375 11.5 12q-1.725-.375-2.762-1.788Q7.7 8.8 7.7 7V4H5.55v-.7h12.9V4H16.3v3q0 1.8-1.037 3.212Q14.225 11.625 12.5 12q1.725.375 2.763 1.787Q16.3 15.2 16.3 17v3h2.15v.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassBottomW100.displayName = 'AmauiIconMaterialHourglassBottomW100';

export default IconMaterialHourglassBottomW100;
