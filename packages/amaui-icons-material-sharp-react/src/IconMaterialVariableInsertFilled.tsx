import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableInsertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertFilled'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h720v160H560v240H120Zm744 120L720-303v123h-80v-260h260v80H776l144 144-56 56Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertFilled.displayName = 'AmauiIconMaterialVariableInsertFilled';

export default IconMaterialVariableInsertFilled;
