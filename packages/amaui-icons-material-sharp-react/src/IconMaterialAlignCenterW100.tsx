import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignCenterW100'

      short_name='AlignCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 590v-28h696v28H132Zm174-120v-68h348v68H306Zm0 280v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignCenterW100.displayName = 'AmauiIconMaterialAlignCenterW100';

export default IconMaterialAlignCenterW100;
