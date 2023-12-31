import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostW100'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-24.75 0-42.375-17.625T172-232v-496q0-24.75 17.625-42.375T232-788h496q24.75 0 42.375 17.625T788-728v496q0 24.75-17.625 42.375T728-172Zm4-126H228v76h504v-76Zm-504-28h504v-76H228v76Zm0-110h504v-296H228v296Zm0 138v76-76Zm0-28v-76 76Zm0-110v-296 296Zm0 34v-34 34Zm0 104v-28 28Z"/>
    </Icon>
  );
});

IconMaterialPostW100.displayName = 'AmauiIconMaterialPostW100';

export default IconMaterialPostW100;
