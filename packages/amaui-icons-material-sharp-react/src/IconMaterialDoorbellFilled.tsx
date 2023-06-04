import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorbellFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorbellFilled'

      short_name='Doorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.5q.425 0 .713-.288.287-.287.287-.712h-2q0 .425.288.712.287.288.712.288ZM8 16h8v-1h-1v-2.35q0-1.1-.6-2-.6-.9-1.65-1.15v-1h-1.5v1q-1.05.25-1.65 1.15-.6.9-.6 2V15H8Zm-4 5V9l8-6 8 6v12Z"/>
    </Icon>
  );
});

IconMaterialDoorbellFilled.displayName = 'AmauiIconMaterialDoorbellFilled';

export default IconMaterialDoorbellFilled;
