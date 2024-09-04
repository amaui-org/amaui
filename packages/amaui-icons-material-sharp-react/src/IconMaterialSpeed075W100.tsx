import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed075W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed075W100'

      short_name='Speed075'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-306v-28h28v28h-28Zm308 0v-28h160v-132H560v-188h188v28H588v132h160v188H560Zm-186 0 80-320H296v-28h188v26l-80 322h-30Z"/>
    </Icon>
  );
});

IconMaterialSpeed075W100.displayName = 'AmauiIconMaterialSpeed075W100';

export default IconMaterialSpeed075W100;
