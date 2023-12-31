import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJamW100Filled'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-184v-28h202v-358l90 90 20-20-124-124-124 124 20 20 90-90v198H132v-416h696v416H522v160h146v28H292Z"/>
    </Icon>
  );
});

IconMaterialOpenJamW100Filled.displayName = 'AmauiIconMaterialOpenJamW100Filled';

export default IconMaterialOpenJamW100Filled;
