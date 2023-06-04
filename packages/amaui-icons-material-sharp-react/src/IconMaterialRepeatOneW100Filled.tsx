import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneW100Filled'

      short_name='RepeatOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.9 14.6v-4.5h-1.1v-.7h1.8v5.2Zm-4.65 6.25-3.1-3.1 3.1-3.1.5.5L5.5 17.4h11.9v-4h.7v4.7H5.5l2.25 2.25ZM5.9 10.6V5.9h12.6l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5L18.5 6.6H6.6v4Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneW100Filled.displayName = 'AmauiIconMaterialRepeatOneW100Filled';

export default IconMaterialRepeatOneW100Filled;
