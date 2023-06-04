import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPause = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pause'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 19V5h4v14Zm-8 0V5h4v14Z"/>
    </Icon>
  );
});

IconMaterialPause.displayName = 'AmauiIconMaterialPause';

export default IconMaterialPause;
