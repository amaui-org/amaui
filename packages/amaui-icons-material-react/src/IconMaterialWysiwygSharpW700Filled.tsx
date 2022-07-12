import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygSharpW700Filled'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M2.225 21.775V2.225H21.775V21.775ZM5 19H19V7H5ZM7 12V10H17V12ZM7 16V14H13V16Z"/>
    </Icon>
  )
});

export default IconMaterialWysiwygSharpW700Filled;
