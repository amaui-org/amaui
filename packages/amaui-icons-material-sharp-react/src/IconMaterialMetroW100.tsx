import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMetroW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MetroW100'

      short_name='Metro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h105l203 537 202-537h106v616h-60v-562L511-172h-63L232-730v558h-60Z"/>
    </Icon>
  );
});

IconMaterialMetroW100.displayName = 'AmauiIconMaterialMetroW100';

export default IconMaterialMetroW100;
