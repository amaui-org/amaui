import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100'

      short_name='BottomPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M363 561h234L480 443 363 561ZM200 856h560V736H200v120Zm0-148h560V296H200v412Zm0 28v120-120Zm-28 148V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100.displayName = 'AmauiIconMaterialBottomPanelOpenW100';

export default IconMaterialBottomPanelOpenW100;
