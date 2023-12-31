import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedFilled'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m692-150 142-142-30-30-112 112-56-56-30 30 86 86Zm28 110q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-300-80v-560h140v-120h-80v-80h160v372q-89 29-144.5 102T440-240q0 32 7 61.5t21 58.5h-48Zm-180 0v-560h120v560H240Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedFilled.displayName = 'AmauiIconMaterialCarryOnBagCheckedFilled';

export default IconMaterialCarryOnBagCheckedFilled;
