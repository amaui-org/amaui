import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3W100'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 18.7v-4h-4V14h4v-4h-4v-.7h4v-4h.7v4h4v-4h.7v4h4v.7h-4v4h4v.7h-4v4H14v-4h-4v4ZM10 14h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3W100.displayName = 'AmauiIconMaterialGrid3x3W100';

export default IconMaterialGrid3x3W100;
