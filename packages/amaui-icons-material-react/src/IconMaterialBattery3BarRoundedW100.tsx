import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery3BarRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarRoundedW100'
      short_name='Battery3Bar'

      {...props}
    >
      <path d="M8.9 20.45Q8.575 20.45 8.363 20.237Q8.15 20.025 8.15 19.7V5.825Q8.15 5.5 8.363 5.287Q8.575 5.075 8.9 5.075H10.4V4.325Q10.4 4 10.613 3.787Q10.825 3.575 11.15 3.575H12.85Q13.175 3.575 13.388 3.787Q13.6 4 13.6 4.325V5.075H15.1Q15.425 5.075 15.638 5.287Q15.85 5.5 15.85 5.825V19.7Q15.85 20.025 15.638 20.237Q15.425 20.45 15.1 20.45ZM8.85 13.75H15.15V5.75H8.85Z"/>
    </Icon>
  );
});

IconMaterialBattery3BarRoundedW100.displayName = 'AmauiIconMaterialBattery3BarRoundedW100';

export default IconMaterialBattery3BarRoundedW100;
