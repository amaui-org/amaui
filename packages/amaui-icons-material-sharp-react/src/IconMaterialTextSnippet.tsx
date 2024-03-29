import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSnippet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippet'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V9.825L14.175 5H5Zm-2 2V3h12l6 6v12Zm4-4h10v-2H7Zm0-4h10v-2H7Zm0-4h7V7H7ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialTextSnippet.displayName = 'AmauiIconMaterialTextSnippet';

export default IconMaterialTextSnippet;
