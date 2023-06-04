import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatW100Filled'

      short_name='Repeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.25 20.85-3.1-3.1 3.1-3.1.5.5L5.5 17.4h11.9v-4h.7v4.7H5.5l2.25 2.25ZM5.9 10.6V5.9h12.6l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5L18.5 6.6H6.6v4Z"/>
    </Icon>
  );
});

IconMaterialRepeatW100Filled.displayName = 'AmauiIconMaterialRepeatW100Filled';

export default IconMaterialRepeatW100Filled;
