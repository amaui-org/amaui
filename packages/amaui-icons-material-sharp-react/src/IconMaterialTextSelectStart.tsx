import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectStart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStart'

      short_name='TextSelectStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM120 936v-80h80V296h-80v-80h240v80h-80v560h80v80H120Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStart.displayName = 'AmauiIconMaterialTextSelectStart';

export default IconMaterialTextSelectStart;
