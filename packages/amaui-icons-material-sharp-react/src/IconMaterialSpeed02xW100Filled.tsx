import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed02xW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed02xW100Filled'

      short_name='Speed02x'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-306v-28h28v28h-28Zm94 0v-188h160v-132H266v-28h188v188H294v132h160v28H266Zm268 0 110-184-98-164h34l81 136 81-136h32l-97 162 111 186h-34l-94-157-94 157h-32Z"/>
    </Icon>
  );
});

IconMaterialSpeed02xW100Filled.displayName = 'AmauiIconMaterialSpeed02xW100Filled';

export default IconMaterialSpeed02xW100Filled;
