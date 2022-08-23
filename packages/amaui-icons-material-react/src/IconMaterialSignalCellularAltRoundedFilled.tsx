import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalCellularAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltRoundedFilled'
      short_name='SignalCellularAlt'

      {...props}
    >
      <path d="M18.5 20Q17.875 20 17.438 19.562Q17 19.125 17 18.5V5.5Q17 4.875 17.438 4.438Q17.875 4 18.5 4Q19.125 4 19.562 4.438Q20 4.875 20 5.5V18.5Q20 19.125 19.562 19.562Q19.125 20 18.5 20ZM6.5 20Q6.2 20 5.925 19.887Q5.65 19.775 5.438 19.562Q5.225 19.35 5.113 19.075Q5 18.8 5 18.5V15.5Q5 14.875 5.438 14.438Q5.875 14 6.5 14Q7.125 14 7.562 14.438Q8 14.875 8 15.5V18.5Q8 18.8 7.888 19.075Q7.775 19.35 7.562 19.562Q7.35 19.775 7.075 19.887Q6.8 20 6.5 20ZM12.5 20Q11.875 20 11.438 19.562Q11 19.125 11 18.5V10.5Q11 9.875 11.438 9.438Q11.875 9 12.5 9Q13.125 9 13.562 9.438Q14 9.875 14 10.5V18.5Q14 19.125 13.562 19.562Q13.125 20 12.5 20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltRoundedFilled.displayName = 'AmauiIconMaterialSignalCellularAltRoundedFilled';

export default IconMaterialSignalCellularAltRoundedFilled;
