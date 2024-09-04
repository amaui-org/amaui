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
      <path d="M530-380h140q13 0 21.5-8.5T700-410v-180q0-13-8.5-21.5T670-620H530q-13 0-21.5 8.5T500-590v180q0 13 8.5 21.5T530-380ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialFloatLandscape2W100Filled.displayName = 'AmauiIconMaterialFloatLandscape2W100Filled';

export default IconMaterialFloatLandscape2W100Filled;
