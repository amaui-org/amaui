import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTab = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tab'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm18-2v-8h-7V6H4v12ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialTab.displayName = 'AmauiIconMaterialTab';

export default IconMaterialTab;
