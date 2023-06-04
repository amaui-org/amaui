import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayFilled'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 14 6-4-6-4Zm-8 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayFilled.displayName = 'AmauiIconMaterialAutoReadPlayFilled';

export default IconMaterialAutoReadPlayFilled;
