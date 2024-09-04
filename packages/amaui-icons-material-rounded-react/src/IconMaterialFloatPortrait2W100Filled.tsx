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
      <path d="M370-500h180q13 0 21.5-8.5T580-530v-140q0-13-8.5-21.5T550-700H370q-13 0-21.5 8.5T340-670v140q0 13 8.5 21.5T370-500Zm378 308q0 26-17 43t-43 17H272q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2W100Filled.displayName = 'AmauiIconMaterialFloatPortrait2W100Filled';

export default IconMaterialFloatPortrait2W100Filled;
