import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepOffW100Filled'

      short_name='KeepOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M628-788v28h-40v275L372-701v-59h-40v-28h296ZM480-170l-14-14v-188H314v-28l58-58v-90L132-788l20-20 616 616-20 20-200-200h-54v188l-14 14Z"/>
    </Icon>
  );
});

IconMaterialKeepOffW100Filled.displayName = 'AmauiIconMaterialKeepOffW100Filled';

export default IconMaterialKeepOffW100Filled;
