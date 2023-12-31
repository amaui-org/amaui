import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpFilled'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m550-30-56-57 73-73H240v-487l80 80v327h247l-73-73 56-57 170 170L550-30Zm170-283-80-80v-327H393l73 73-56 57-170-170 170-170 56 57-73 73h327v487Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpFilled.displayName = 'AmauiIconMaterialScreenRotationUpFilled';

export default IconMaterialScreenRotationUpFilled;
