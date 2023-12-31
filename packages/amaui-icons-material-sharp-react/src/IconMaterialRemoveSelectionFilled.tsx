import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveSelectionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveSelectionFilled'

      short_name='RemoveSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200h80v80Zm-80-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160q0-33 23.5-56.5T200-840v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm60 640-56-56 142-142-142-142 56-56 142 142 142-142 56 56-142 142 142 142-56 56-142-142-142 142Zm100-640v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z"/>
    </Icon>
  );
});

IconMaterialRemoveSelectionFilled.displayName = 'AmauiIconMaterialRemoveSelectionFilled';

export default IconMaterialRemoveSelectionFilled;
