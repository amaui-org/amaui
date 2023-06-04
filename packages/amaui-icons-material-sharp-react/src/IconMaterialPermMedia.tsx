import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMedia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMedia'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17V2h7l2 2h9v13Zm2-2h14V6h-7.825l-2-2H7Zm-6 6V6h2v13h17v2Zm8-8h10l-3.375-4.5L13 12l-1.625-2.175Zm-2 2V4v11Z"/>
    </Icon>
  );
});

IconMaterialPermMedia.displayName = 'AmauiIconMaterialPermMedia';

export default IconMaterialPermMedia;
