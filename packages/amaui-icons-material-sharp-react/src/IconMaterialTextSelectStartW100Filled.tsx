import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStartW100Filled'

      short_name='TextSelectStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 884v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h28v28h-28Zm0-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-150v-28h28v28h-28ZM172 884v-28h80V296h-80v-28h188v28h-80v560h80v28H172Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStartW100Filled.displayName = 'AmauiIconMaterialTextSelectStartW100Filled';

export default IconMaterialTextSelectStartW100Filled;
