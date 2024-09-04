import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed05W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05W100Filled'

      short_name='Speed05'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M319-306v-28h28v28h-28Zm94 0v-28h160v-132H413v-188h188v28H441v132h160v188H413Z"/>
    </Icon>
  );
});

IconMaterialSpeed05W100Filled.displayName = 'AmauiIconMaterialSpeed05W100Filled';

export default IconMaterialSpeed05W100Filled;
