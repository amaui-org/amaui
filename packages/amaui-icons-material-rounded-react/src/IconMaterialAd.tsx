import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ad'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-440H200v440Z"/>
    </Icon>
  );
});

IconMaterialAd.displayName = 'AmauiIconMaterialAd';

export default IconMaterialAd;
