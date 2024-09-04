import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed2xW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed2xW100Filled'

      short_name='Speed2x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M246-306v-188h160v-132H246v-28h188v188H274v132h160v28H246Zm248 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Z"/>
    </Icon>
  );
});

IconMaterialSpeed2xW100Filled.displayName = 'AmauiIconMaterialSpeed2xW100Filled';

export default IconMaterialSpeed2xW100Filled;
