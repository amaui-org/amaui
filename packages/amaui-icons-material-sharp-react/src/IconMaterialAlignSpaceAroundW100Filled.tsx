import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceAroundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceAroundW100Filled'

      short_name='AlignSpaceAround'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 256v-28h696v28H132Zm0 668v-28h696v28H132Zm174-494v-68h348v68H306Zm0 360v-68h348v68H306Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceAroundW100Filled.displayName = 'AmauiIconMaterialAlignSpaceAroundW100Filled';

export default IconMaterialAlignSpaceAroundW100Filled;
