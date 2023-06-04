import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectW100Filled'

      short_name='Select'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884v-28h28v28h-28Zm0-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-28h28v28h-28Zm108 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h28v28h-28Zm0-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-150v-28h28v28h-28Z"/>
    </Icon>
  );
});

IconMaterialSelectW100Filled.displayName = 'AmauiIconMaterialSelectW100Filled';

export default IconMaterialSelectW100Filled;
