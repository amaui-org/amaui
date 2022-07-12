import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetSharpFilled'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M3 21V3H15L21 9V21ZM7 17H17V15H7ZM7 13H17V11H7ZM7 9H14V7H7Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetSharpFilled;
