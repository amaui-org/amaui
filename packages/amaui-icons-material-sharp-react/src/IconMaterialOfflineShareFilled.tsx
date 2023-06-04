import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflineShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineShareFilled'

      short_name='OfflineShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19V1h12v18Zm2-5h8V6h-8Zm-6 9V5h2v16h10v2Zm7-11V8.75h3.15l-.7-.7L14.5 7 17 9.5 14.5 12l-1.05-1.05.7-.7H12.5V12Z"/>
    </Icon>
  );
});

IconMaterialOfflineShareFilled.displayName = 'AmauiIconMaterialOfflineShareFilled';

export default IconMaterialOfflineShareFilled;
