import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableInsertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertW100'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v118h-28v-90H200v240h390v28H172Zm28-28v-240 240Zm668 148L718-362v130h-28v-178h178v28H738l149 151-19 19Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertW100.displayName = 'AmauiIconMaterialVariableInsertW100';

export default IconMaterialVariableInsertW100;
