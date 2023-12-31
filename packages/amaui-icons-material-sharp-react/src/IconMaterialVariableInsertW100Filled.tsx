import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertW100Filled'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v118H590v178H172Zm696 120L718-362v130h-28v-178h178v28H738l149 151-19 19Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertW100Filled.displayName = 'AmauiIconMaterialVariableInsertW100Filled';

export default IconMaterialVariableInsertW100Filled;
