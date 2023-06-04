import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100Filled'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 696V496h320v200H400ZM132 844V308h696v536H132Zm28-28h640V416H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeW100Filled.displayName = 'AmauiIconMaterialIframeW100Filled';

export default IconMaterialIframeW100Filled;
