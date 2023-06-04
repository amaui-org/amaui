import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderVertical = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVertical'

      short_name='BorderVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16V3h2v18Zm4 0v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderVertical.displayName = 'AmauiIconMaterialBorderVertical';

export default IconMaterialBorderVertical;
