import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOn'

      short_name='GridOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm2-2h4v-4H4Zm0-6h4v-4H4Zm0-6h4V4H4Zm6 12h4v-4h-4Zm0-6h4v-4h-4Zm0-6h4V4h-4Zm6 12h4v-4h-4Zm0-6h4v-4h-4Zm0-6h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialGridOn.displayName = 'AmauiIconMaterialGridOn';

export default IconMaterialGridOn;
