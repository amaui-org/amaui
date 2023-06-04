import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderVerticalFilled'

      short_name='BorderVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16V3h2v18Zm4 0v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialBorderVerticalFilled.displayName = 'AmauiIconMaterialBorderVerticalFilled';

export default IconMaterialBorderVerticalFilled;
