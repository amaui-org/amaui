import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMissedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedW100'

      short_name='CallMissed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.125 16.5-7.65-7.65v5.5h-.7v-6.7h6.7v.7h-5.5l7.15 7.15 7.6-7.6.5.5Z"/>
    </Icon>
  );
});

IconMaterialCallMissedW100.displayName = 'AmauiIconMaterialCallMissedW100';

export default IconMaterialCallMissedW100;
