import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryError'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m656 976-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-376 0V256h120v-80h160v80h120v348q-22 6-42 15t-38 22V336H360v560h148q6 22 15 42t22 38H280Zm80-80h148-8 8-148Z"/>
    </Icon>
  );
});

IconMaterialBatteryError.displayName = 'AmauiIconMaterialBatteryError';

export default IconMaterialBatteryError;
