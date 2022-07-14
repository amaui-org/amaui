import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygSharpW100'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM5 19H19V7H5ZM7 11.35V10.65H17V11.35ZM7 15.35V14.65H13V15.35Z"/>
    </Icon>
  );
});

export default IconMaterialWysiwygSharpW100;
