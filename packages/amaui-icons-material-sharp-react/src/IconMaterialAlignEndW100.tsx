import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignEndW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignEndW100'

      short_name='AlignEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 924v-28h696v28H132Zm174-414v-68h348v68H306Zm0 240v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignEndW100.displayName = 'AmauiIconMaterialAlignEndW100';

export default IconMaterialAlignEndW100;
