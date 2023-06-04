import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEqualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Equalizer'

      short_name='Equalizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-8h4v8Zm6 0V4h4v16Zm6 0V9h4v11Z"/>
    </Icon>
  );
});

IconMaterialEqualizer.displayName = 'AmauiIconMaterialEqualizer';

export default IconMaterialEqualizer;
