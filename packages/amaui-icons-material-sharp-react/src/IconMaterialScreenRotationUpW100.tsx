import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpW100'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m524-93-20-20 100-99H292v-390l28 28v334h283l-98-99 19-20 133 133L524-93Zm144-264-28-28v-335H357l98 99-19 20-133-133 133-133 20 20-100 99h312v391Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpW100.displayName = 'AmauiIconMaterialScreenRotationUpW100';

export default IconMaterialScreenRotationUpW100;
