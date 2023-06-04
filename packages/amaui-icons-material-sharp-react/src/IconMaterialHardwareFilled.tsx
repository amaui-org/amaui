import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardwareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareFilled'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 11-3-3v3H9V8H4q0-2.075 1.463-3.537Q6.925 3 9 3h6v3l3-3h2v8ZM9 21v-8h6v8Z"/>
    </Icon>
  );
});

IconMaterialHardwareFilled.displayName = 'AmauiIconMaterialHardwareFilled';

export default IconMaterialHardwareFilled;
