import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnarchiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveFilled'

      short_name='Unarchive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V5.8L5.3 3h13.4L21 5.8V21ZM5.4 6h13.2l-.85-1H6.25ZM11 17h2v-4.2l1.6 1.6L16 13l-4-4-4 4 1.4 1.4 1.6-1.6Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveFilled.displayName = 'AmauiIconMaterialUnarchiveFilled';

export default IconMaterialUnarchiveFilled;
