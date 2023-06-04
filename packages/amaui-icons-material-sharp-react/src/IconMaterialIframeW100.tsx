import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeW100'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M444 652h232V540H444v112Zm-28 28V512h288v168H416ZM132 844V308h696v536H132Zm28-28h640V416H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframeW100.displayName = 'AmauiIconMaterialIframeW100';

export default IconMaterialIframeW100;
