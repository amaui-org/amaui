import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlindsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsW100Filled'

      short_name='Blinds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V18h2V5.3h13.4V18h2v.7ZM6 18h12v-7h-5.65v1.95q.425.125.712.475.288.35.288.825 0 .575-.387.975-.388.4-.963.4t-.975-.4q-.4-.4-.4-.975 0-.475.3-.825t.725-.475V11H6Z"/>
    </Icon>
  );
});

IconMaterialBlindsW100Filled.displayName = 'AmauiIconMaterialBlindsW100Filled';

export default IconMaterialBlindsW100Filled;
