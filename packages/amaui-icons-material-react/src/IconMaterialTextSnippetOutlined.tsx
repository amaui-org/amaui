import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetOutlined'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5 19H19Q19 19 19 19Q19 19 19 19V9.825L14.175 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H15L21 9V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 17H17V15H7ZM7 13H17V11H7ZM7 9H14V7H7ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5V9.825V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialTextSnippetOutlined;
