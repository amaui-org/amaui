import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveFilled'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400h720v128q-14-4-29-6t-31-2q-91 0-155.5 64T560-340q0 16 2 31t6 29H120Zm576 80-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveFilled.displayName = 'AmauiIconMaterialVariableRemoveFilled';

export default IconMaterialVariableRemoveFilled;
