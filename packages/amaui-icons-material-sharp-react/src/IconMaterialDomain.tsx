import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomain = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Domain'

      short_name='Domain'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V3h10v4h10v14Zm2-2h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm0-4h2V5H4Zm4 12h2v-2H8Zm0-4h2v-2H8Zm0-4h2V9H8Zm0-4h2V5H8Zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2Zm4-6v-2h2v2Zm0 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDomain.displayName = 'AmauiIconMaterialDomain';

export default IconMaterialDomain;
