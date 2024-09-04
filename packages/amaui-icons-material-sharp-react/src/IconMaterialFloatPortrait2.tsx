import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-520h240v-200H320v200ZM800-80H160v-800h640v800Zm-80-80v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2.displayName = 'AmauiIconMaterialFloatPortrait2';

export default IconMaterialFloatPortrait2;
