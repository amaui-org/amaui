import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderTop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTop'

      short_name='BorderTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h18v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm4 8v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4 12v-2h2v2Zm0-8v-2h2v2Zm4 8v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderTop.displayName = 'AmauiIconMaterialBorderTop';

export default IconMaterialBorderTop;
