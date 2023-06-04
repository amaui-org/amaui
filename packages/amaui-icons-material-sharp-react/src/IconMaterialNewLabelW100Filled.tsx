import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelW100Filled'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 17.7v-5.05h-3v-3h-4.9V6.3h11.075L19.55 12l-4.075 5.7Zm-6.7 1.65v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Z"/>
    </Icon>
  );
});

IconMaterialNewLabelW100Filled.displayName = 'AmauiIconMaterialNewLabelW100Filled';

export default IconMaterialNewLabelW100Filled;
