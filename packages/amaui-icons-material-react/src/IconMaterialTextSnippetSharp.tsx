import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetSharp'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5 19H19V9.825L14.175 5H5ZM3 21V3H15L21 9V21ZM7 17H17V15H7ZM7 13H17V11H7ZM7 9H14V7H7ZM5 19V5V9.825V19Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetSharp;
