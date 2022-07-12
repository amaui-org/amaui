import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnippetFolderSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderSharpFilled'
      short_name='SnippetFolder'

      {...props}
    >
      <path d="M14.5 15.5V10.5H15.875L17.5 12.125V15.5ZM13 17H19V11.5L16.5 9H13ZM2 4H10L12 6H22V20H2Z"/>
    </Icon>
  )
});

export default IconMaterialSnippetFolderSharpFilled;
