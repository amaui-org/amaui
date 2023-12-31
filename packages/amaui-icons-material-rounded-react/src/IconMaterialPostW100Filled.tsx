import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostW100Filled'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-24.75 0-42.375-17.625T172-232v-496q0-24.75 17.625-42.375T232-788h496q24.75 0 42.375 17.625T788-728v496q0 24.75-17.625 42.375T728-172ZM228-402h504v-34H228v34Zm0 104h504v-28H228v28Z"/>
    </Icon>
  );
});

IconMaterialPostW100Filled.displayName = 'AmauiIconMaterialPostW100Filled';

export default IconMaterialPostW100Filled;
