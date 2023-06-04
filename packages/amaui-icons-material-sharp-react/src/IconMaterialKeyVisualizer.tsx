import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyVisualizer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyVisualizer'

      short_name='KeyVisualizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h3v2Zm0-4v-2h8v2Zm0-4v-2h18v2Zm0-4V7h8v2Zm0-4V3h3v2Zm5 16v-2h3v2ZM8 5V3h3v2Zm5 16v-2h3v2Zm0-4v-2h8v2Zm0-8V7h8v2Zm0-4V3h3v2Zm5 16v-2h3v2Zm0-16V3h3v2Z"/>
    </Icon>
  );
});

IconMaterialKeyVisualizer.displayName = 'AmauiIconMaterialKeyVisualizer';

export default IconMaterialKeyVisualizer;
