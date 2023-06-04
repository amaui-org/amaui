import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery50W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery50W100'

      short_name='Battery50'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.35V4.65h2.75v-1.5h3.2v1.5h2.75v16.7Z"/>
    </Icon>
  );
});

IconMaterialBattery50W100.displayName = 'AmauiIconMaterialBattery50W100';

export default IconMaterialBattery50W100;
