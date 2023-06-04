import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Resize'

      short_name='Resize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 616v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160V296H600v-80h240v240h-80ZM120 936V696h80v160h160v80H120Z"/>
    </Icon>
  );
});

IconMaterialResize.displayName = 'AmauiIconMaterialResize';

export default IconMaterialResize;
