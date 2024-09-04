import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatLandscape2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatLandscape2W100Filled'

      short_name='FloatLandscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-380h200v-240H500v240ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape2W100Filled.displayName = 'AmauiIconMaterialFloatLandscape2W100Filled';

export default IconMaterialFloatLandscape2W100Filled;
