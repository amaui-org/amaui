import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectEndFilled'

      short_name='TextSelectEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120 296v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm480 0v-80h80V296h-80v-80h240v80h-80v560h80v80H600Z"/>
    </Icon>
  );
});

IconMaterialTextSelectEndFilled.displayName = 'AmauiIconMaterialTextSelectEndFilled';

export default IconMaterialTextSelectEndFilled;
