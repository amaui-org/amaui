import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResizeW100Filled'

      short_name='Resize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 616v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-28h28v28h-28Zm108 0v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm160 0v-28h28v28h-28Zm0-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170V296H600v-28h188v178h-28ZM172 884V696h28v160h160v28H172Z"/>
    </Icon>
  );
});

IconMaterialResizeW100Filled.displayName = 'AmauiIconMaterialResizeW100Filled';

export default IconMaterialResizeW100Filled;
