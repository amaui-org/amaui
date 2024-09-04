import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeDockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeDockW100'

      short_name='BikeDock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-28l197-33 33-555h156l33 555 197 33v28H172Zm258-59h100v-529H430v529Z"/>
    </Icon>
  );
});

IconMaterialBikeDockW100.displayName = 'AmauiIconMaterialBikeDockW100';

export default IconMaterialBikeDockW100;
