import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReorderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReorderW100'

      short_name='QuickReorder'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M123-212q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h152v-106H163q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h112v-106h-70q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h70v-116l-62-137q-2-5 0-11t7-8q5-2 11 0t8 7l66 145h476l-68-143q-2-5 0-11t7-8q5-2 11 0t8 7l66 143q3 5.882 4.5 12.132T811-615v373q0 13-8.5 21.5T781-212H123Zm340-254h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T632.975-490q-4.025-4-9.975-4H463q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4ZM303-240h480v-360H303v360Zm0 0v-360 360Z"/>
    </Icon>
  );
});

IconMaterialQuickReorderW100.displayName = 'AmauiIconMaterialQuickReorderW100';

export default IconMaterialQuickReorderW100;
