import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectFilled'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.35 15 12 5l6.65 10ZM5 19v-2h14v2Z"/>
    </Icon>
  );
});

IconMaterialEjectFilled.displayName = 'AmauiIconMaterialEjectFilled';

export default IconMaterialEjectFilled;
