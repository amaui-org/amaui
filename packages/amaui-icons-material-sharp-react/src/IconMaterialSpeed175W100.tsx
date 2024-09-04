import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed175W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed175W100'

      short_name='Speed175'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306v-28h28v28h-28Zm322 0v-28h160v-132H640v-188h188v28H668v132h160v188H640Zm-428 0v-320h-80v-28h108v348h-28Zm242 0 80-320H376v-28h188v31l-80 317h-30Z"/>
    </Icon>
  );
});

IconMaterialSpeed175W100.displayName = 'AmauiIconMaterialSpeed175W100';

export default IconMaterialSpeed175W100;
