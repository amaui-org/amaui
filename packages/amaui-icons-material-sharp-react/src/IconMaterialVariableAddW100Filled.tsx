import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAddW100Filled'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v48h-14q-94 0-159 65t-65 159q0 6 .167 11.897.166 5.896.833 12.103H172Zm588 120v-120H640v-28h120v-120h28v120h120v28H788v120h-28Z"/>
    </Icon>
  );
});

IconMaterialVariableAddW100Filled.displayName = 'AmauiIconMaterialVariableAddW100Filled';

export default IconMaterialVariableAddW100Filled;
