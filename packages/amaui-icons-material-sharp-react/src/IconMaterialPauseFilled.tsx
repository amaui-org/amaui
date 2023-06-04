import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseFilled'

      short_name='Pause'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 19V5h6v14Zm-8 0V5h6v14Z"/>
    </Icon>
  );
});

IconMaterialPauseFilled.displayName = 'AmauiIconMaterialPauseFilled';

export default IconMaterialPauseFilled;
