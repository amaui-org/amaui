import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderStyleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleFilled'

      short_name='BorderStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v2H5v16Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm4 0v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleFilled.displayName = 'AmauiIconMaterialBorderStyleFilled';

export default IconMaterialBorderStyleFilled;
