import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabDuplicateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabDuplicateW100Filled'

      short_name='TabDuplicate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 872h-28v-28h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-28h28v28h-28Zm108 588v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h28v28h-28ZM266 764V228h536v536H266Zm268-398h240V256H534v110Z"/>
    </Icon>
  );
});

IconMaterialTabDuplicateW100Filled.displayName = 'AmauiIconMaterialTabDuplicateW100Filled';

export default IconMaterialTabDuplicateW100Filled;
