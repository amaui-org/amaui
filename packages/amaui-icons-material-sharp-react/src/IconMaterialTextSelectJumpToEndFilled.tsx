import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectJumpToEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectJumpToEndFilled'

      short_name='TextSelectJumpToEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m400 736-56-56 63-64H120v-80h287l-63-64 56-56 160 160-160 160Zm360 200V216h80v720h-80ZM600 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120 296v-80h80v80h-80Zm0 640v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectJumpToEndFilled.displayName = 'AmauiIconMaterialTextSelectJumpToEndFilled';

export default IconMaterialTextSelectJumpToEndFilled;
