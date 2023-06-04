import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flip'

      short_name='Flip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h6v2H5v14h4v2Zm8 2V1h2v22Zm8-18V3h2v2Zm0 8v-2h2v2Zm0 8v-2h2v2Zm0-12V7h2v2Zm0 8v-2h2v2Zm-4 4v-2h2v2Zm0-16V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlip.displayName = 'AmauiIconMaterialFlip';

export default IconMaterialFlip;
