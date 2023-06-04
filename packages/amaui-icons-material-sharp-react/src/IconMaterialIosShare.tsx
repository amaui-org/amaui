import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIosShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShare'

      short_name='IosShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16V4.825l-1.6 1.6L8 5l4-4 4 4-1.4 1.425-1.6-1.6V16Zm-7 7V8h5v2H6v11h12V10h-3V8h5v15Z"/>
    </Icon>
  );
});

IconMaterialIosShare.displayName = 'AmauiIconMaterialIosShare';

export default IconMaterialIosShare;
