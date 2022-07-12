import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetOutlinedFilled'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H15L21 9V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 17H17V15H7ZM7 13H17V11H7ZM7 9H14V7H7Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetOutlinedFilled;
