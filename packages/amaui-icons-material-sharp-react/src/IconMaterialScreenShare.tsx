import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShare'

      short_name='ScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14h2v-3h3v2l3-3-3-3v2H8Zm-6 4V3h20v15Zm2-2h16V5H4Zm-3 5v-2h22v2Zm3-5V5v11Z"/>
    </Icon>
  );
});

IconMaterialScreenShare.displayName = 'AmauiIconMaterialScreenShare';

export default IconMaterialScreenShare;
