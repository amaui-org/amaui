import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderRightFilled'

      short_name='BorderRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Zm4 16v-2h2v2Zm0-8v-2h2v2Zm0-8V3h2v2Zm4 16V3h2v18Z"/>
    </Icon>
  );
});

IconMaterialBorderRightFilled.displayName = 'AmauiIconMaterialBorderRightFilled';

export default IconMaterialBorderRightFilled;
