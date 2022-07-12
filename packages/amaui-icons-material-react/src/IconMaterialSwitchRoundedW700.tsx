import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRoundedW700'
      short_name='Switch'

      {...props}
    >
      <path d="M8 17h8V7H8Zm2-2V9h4v6Zm1-3h2v-2h-2Zm-5.7 9.85q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h13.4q1.325 0 2.238.912.912.913.912 2.238v13.4q0 1.325-.912 2.238-.913.912-2.238.912Zm0-3.15h13.4V5.3H5.3v13.4Zm0-13.4v13.4V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialSwitchRoundedW700;
