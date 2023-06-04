import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighQuality = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQuality'

      short_name='HighQuality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6Zm8.75 1.5h1.5V15H18V9h-5v6h1.75Zm-.25-3v-3h2v3ZM2 20V4h20v16Zm2-2h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialHighQuality.displayName = 'AmauiIconMaterialHighQuality';

export default IconMaterialHighQuality;
