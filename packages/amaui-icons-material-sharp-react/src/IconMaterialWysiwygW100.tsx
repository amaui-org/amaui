import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWysiwygW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygW100'

      short_name='Wysiwyg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4ZM5 19h14V7H5Zm2-7.65v-.7h10v.7Zm0 4v-.7h6v.7Z"/>
    </Icon>
  );
});

IconMaterialWysiwygW100.displayName = 'AmauiIconMaterialWysiwygW100';

export default IconMaterialWysiwygW100;
