import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortrait2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortrait2W100'

      short_name='FloatPortrait2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-500h240v-200H340v200Zm408 368H212v-696h536v696Zm-28-28v-640H240v640h480Zm0-640H240h480Z"/>
    </Icon>
  );
});

IconMaterialFloatPortrait2W100.displayName = 'AmauiIconMaterialFloatPortrait2W100';

export default IconMaterialFloatPortrait2W100;
