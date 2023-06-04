import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualizerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerW100Filled'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.35v-6.7h2.7v6.7Zm6 0V4.65h2.7v14.7Zm6 0v-9.7h2.7v9.7Z"/>
    </Icon>
  );
});

IconMaterialEqualizerW100Filled.displayName = 'AmauiIconMaterialEqualizerW100Filled';

export default IconMaterialEqualizerW100Filled;
