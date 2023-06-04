import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessFilled'

      short_name='SwitchAccess'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 776v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-320v-80h80v80h-80ZM280 776V376h400v400H280Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessFilled.displayName = 'AmauiIconMaterialSwitchAccessFilled';

export default IconMaterialSwitchAccessFilled;
