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
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h8.3q.3 0 .588.125.287.125.487.325l4.075 4.075q.2.2.325.487.125.288.125.588v8.3q0 .625-.437 1.062-.438.438-1.063.438Zm2.2-4h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25T16 15H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0-3.35h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM8 9h4.65q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25T8 9Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetW100Filled.displayName = 'AmauiIconMaterialTextSnippetW100Filled';

export default IconMaterialTextSnippetW100Filled;
