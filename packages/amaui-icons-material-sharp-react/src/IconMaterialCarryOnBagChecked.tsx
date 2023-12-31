import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagChecked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagChecked'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m692-150 142-142-30-30-112 112-56-56-30 30 86 86Zm-332-50v-400h-40v400h40Zm108 80H240v-560h320v-120h-80v-80h160v372q-24 8-41.5 16T560-470v-130H440v400h4q3 24 9 42t15 38Zm252-320q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm-320 40Zm-40 200v-400 400Zm80 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagChecked.displayName = 'AmauiIconMaterialCarryOnBagChecked';

export default IconMaterialCarryOnBagChecked;
