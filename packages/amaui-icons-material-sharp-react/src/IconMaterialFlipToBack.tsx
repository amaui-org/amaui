import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlipToBack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBack'

      short_name='FlipToBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 9V7h2v2Zm0 4v-2h2v2Zm0-8V3h2v2Zm4 12v-2h2v2Zm8-12V3h2v2Zm-8 0V3h2v2ZM7 17v-2h2v2Zm12-4v-2h2v2Zm0-4V7h2v2Zm0 8v-2h2v2ZM3 21V7h2v12h12v2ZM15 5V3h2v2Zm0 12v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlipToBack.displayName = 'AmauiIconMaterialFlipToBack';

export default IconMaterialFlipToBack;
