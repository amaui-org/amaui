import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomPanelOpenW100Filled'

      short_name='BottomPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M363 561h234L480 443 363 561ZM200 708h560V296H200v412Zm-28 176V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialBottomPanelOpenW100Filled.displayName = 'AmauiIconMaterialBottomPanelOpenW100Filled';

export default IconMaterialBottomPanelOpenW100Filled;
