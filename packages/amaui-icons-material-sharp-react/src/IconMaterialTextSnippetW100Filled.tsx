import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSnippetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetW100Filled'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h10.425L19.7 9.275V19.7Zm3.35-4h8.7V15h-8.7Zm0-3.35h8.7v-.7h-8.7Zm0-3.35H13v-.7H7.65Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetW100Filled.displayName = 'AmauiIconMaterialTextSnippetW100Filled';

export default IconMaterialTextSnippetW100Filled;
