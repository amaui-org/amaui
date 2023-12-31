import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalBagOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalBagOffW100Filled'

      short_name='PersonalBagOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-784q32 0 54 22t22 54v14q65 24 108.5 80T708-480v136L374-680q5-3 14.5-7.5T404-694v-14q0-32 22-54t54-22Zm0 28q-20 0-34 14t-14 34v6q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14ZM818-82 668-232h40v40q0 26-17 43t-43 17H312q-26 0-43-17t-17-43v-288q0-36 10-68.5t30-59.5L142-758q-4-4-4.5-9.5T142-778q5-5 10-5t10 5l676 676q4 4 4.5 9.5T838-82q-5 5-10 5t-10-5ZM446-454h-86q-6 0-10 4t-4 10q0 6 4 10t10 4h114l-28-28Z"/>
    </Icon>
  );
});

IconMaterialPersonalBagOffW100Filled.displayName = 'AmauiIconMaterialPersonalBagOffW100Filled';

export default IconMaterialPersonalBagOffW100Filled;
