import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed025W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed025W100'

      short_name='Speed025'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-306v-28h28v28h-28Zm348 0v-28h160v-132H560v-188h188v28H588v132h160v188H560Zm-254 0v-188h160v-132H306v-28h188v188H334v132h160v28H306Z"/>
    </Icon>
  );
});

IconMaterialSpeed025W100.displayName = 'AmauiIconMaterialSpeed025W100';

export default IconMaterialSpeed025W100;
