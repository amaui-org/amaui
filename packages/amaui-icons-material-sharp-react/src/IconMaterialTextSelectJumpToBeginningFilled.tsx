import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectJumpToBeginningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectJumpToBeginningFilled'

      short_name='TextSelectJumpToBeginning'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 736 400 576l160-160 56 56-63 64h287v80H553l63 64-56 56ZM120 936V216h80v720h-80Zm160 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectJumpToBeginningFilled.displayName = 'AmauiIconMaterialTextSelectJumpToBeginningFilled';

export default IconMaterialTextSelectJumpToBeginningFilled;
