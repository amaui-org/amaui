import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreencast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Screencast'

      short_name='Screencast'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm480-160v-80h160v80H560Zm0-120v-80h160v80H560Zm-400-80v280h640V496H560v-80h240v-80H480v200H160Z"/>
    </Icon>
  );
});

IconMaterialScreencast.displayName = 'AmauiIconMaterialScreencast';

export default IconMaterialScreencast;
