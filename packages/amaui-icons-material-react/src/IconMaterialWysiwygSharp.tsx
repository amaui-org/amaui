import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygSharp'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M3 21V3H21V21ZM5 19H19V7H5ZM7 12V10H17V12ZM7 16V14H13V16Z"/>
    </Icon>
  );
});

IconMaterialWysiwygSharp.displayName = 'AmauiIconMaterialWysiwygSharp';

export default IconMaterialWysiwygSharp;
