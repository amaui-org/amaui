import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesOther = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesOther'

      short_name='DevicesOther'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20H2V4h18v2H4v12h3Zm2 0v-1.8q-.45-.425-.725-.975Q8 16.675 8 16t.275-1.225q.275-.55.725-.975V12h4v1.8q.45.425.725.975Q14 15.325 14 16t-.275 1.225q-.275.55-.725.975V20Zm2-2.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q11.65 14.5 11 14.5q-.65 0-1.075.425Q9.5 15.35 9.5 16q0 .65.425 1.075.425.425 1.075.425Zm4 2.5V9h7v11Zm2-2h3v-7h-3Z"/>
    </Icon>
  );
});

IconMaterialDevicesOther.displayName = 'AmauiIconMaterialDevicesOther';

export default IconMaterialDevicesOther;
