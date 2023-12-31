import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamW100'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-184h376v-28H494v-358l90 90 20-20-124-124-124 124 20 20 90-90v358H292v28Zm188-302ZM132-372v-416h696v416H600v-28h200v-360H160v360h200v28H132Z"/>
    </Icon>
  );
});

IconMaterialOpenJamW100.displayName = 'AmauiIconMaterialOpenJamW100';

export default IconMaterialOpenJamW100;
