import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveSelectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveSelectionW100Filled'

      short_name='RemoveSelection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-172q-11.55 0-19.775-8.225Q172-188.45 172-200h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160q0-11.55 8.225-19.775Q188.45-788 200-788v28h-28Zm108 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 0v-28h80v28h-80Zm44 588-20-20 142-142-142-142 20-20 142 142 142-142 20 20-142 142 142 142-20 20-142-142-142 142Zm116-588v-28h80v28h-80Zm160 160v-80h28v80h-28Zm0-160v-28q11.55 0 19.775 8.225Q788-771.55 788-760h-28Z"/>
    </Icon>
  );
});

IconMaterialRemoveSelectionW100Filled.displayName = 'AmauiIconMaterialRemoveSelectionW100Filled';

export default IconMaterialRemoveSelectionW100Filled;
