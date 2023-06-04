import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighQualityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighQualityFilled'

      short_name='HighQuality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6Zm8.75 1.5h1.5V15H18V9h-5v6h1.75Zm-.25-3v-3h2v3ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialHighQualityFilled.displayName = 'AmauiIconMaterialHighQualityFilled';

export default IconMaterialHighQualityFilled;
