import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCounter8W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Counter8W100Filled'

      short_name='Counter8'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 924q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-72 27.5-135.5T234 330q47-47 110.5-74.5T480 228q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 72-27.5 135.5T726 822q-47 47-110.5 74.5T480 924Zm-34-174h68q25 0 42.5-17.5T574 690v-68q0-17-9-31.5T540 576q16 0 25-14.5t9-31.5v-68q0-25-17.5-42.5T514 402h-68q-25 0-42.5 17.5T386 462v68q0 17 9 31.5t25 14.5q-16 0-25 14.5t-9 31.5v68q0 25 17.5 42.5T446 750Zm0-320h68q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-14 0-23-9t-9-23v-68q0-14 9-23t23-9Zm0 292q-14 0-23-9t-9-23v-68q0-14 9-23t23-9h68q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68Z"/>
    </Icon>
  );
});

IconMaterialCounter8W100Filled.displayName = 'AmauiIconMaterialCounter8W100Filled';

export default IconMaterialCounter8W100Filled;
