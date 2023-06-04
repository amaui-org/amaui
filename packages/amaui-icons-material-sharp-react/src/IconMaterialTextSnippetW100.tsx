import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSnippetW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetW100'

      short_name='TextSnippet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19h14V9.55L14.45 5H5Zm-.7.7V4.3h10.425L19.7 9.275V19.7Zm3.35-4h8.7V15h-8.7Zm0-3.35h8.7v-.7h-8.7Zm0-3.35H13v-.7H7.65ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetW100.displayName = 'AmauiIconMaterialTextSnippetW100';

export default IconMaterialTextSnippetW100;
