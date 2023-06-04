import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDescriptionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DescriptionW100Filled'

      short_name='Description'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 17.35h6.7v-.7h-6.7Zm0-4h6.7v-.7h-6.7ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialDescriptionW100Filled.displayName = 'AmauiIconMaterialDescriptionW100Filled';

export default IconMaterialDescriptionW100Filled;
