import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortByAlphaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaSharp'
      short_name='SortByAlpha'

      {...props}
    >
      <path d="M2 17 5.75 7H7.9L11.65 17H9.6L8.75 14.6H4.9L4.1 17ZM5.5 12.9H8.1L6.9 9.15H6.75ZM13.7 17V15.1L18.75 8.8H13.9V7H20.95V8.9L15.95 15.2H21V17ZM9 5 12 2 15 5ZM12 22 9 19H15Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaSharp.displayName = 'AmauiIconMaterialSortByAlphaSharp';

export default IconMaterialSortByAlphaSharp;
