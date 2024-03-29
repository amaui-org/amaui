import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffFilled'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816q17 0 28.5-11.5T520 776q0-17-11.5-28.5T480 736q-17 0-28.5 11.5T440 776q0 17 11.5 28.5T480 816Zm-40-160q0 17 11.5 28.5T480 696q17 0 28.5-11.5T520 656v-41l-80-80v121Zm435 202L375 358l70-122q11-20 35-20t35 20l360 622Zm-84 141-64-63H109q-23 0-34-20t0-40l259-447 279 278H499L55 264q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999Z"/>
    </Icon>
  );
});

IconMaterialWarningOffFilled.displayName = 'AmauiIconMaterialWarningOffFilled';

export default IconMaterialWarningOffFilled;
