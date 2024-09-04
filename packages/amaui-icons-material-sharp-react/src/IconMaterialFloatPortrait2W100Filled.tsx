import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2W100Filled'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-500h240v-200H340v200Zm408 368H212v-696h536v696Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2W100Filled.displayName = 'AmauiIconMaterialFloatPortrait2W100Filled';

export default IconMaterialFloatPortrait2W100Filled;
