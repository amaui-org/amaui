import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSortByAlphaSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SortByAlphaSharpW100'
      short_name='SortByAlpha'

      {...props}
    >
      <path d="M2.8 16.45 6.5 7.55H7.2L10.85 16.45H10L9.1 14.1H4.55L3.55 16.45ZM4.8 13.45H8.8L6.85 8.6H6.75ZM14.25 16.45V15.8L19.5 8.2H14.45V7.55H20.4V8.2L15.15 15.8H20.45V16.45ZM9.6 4.75 12 2.35 14.4 4.75ZM12 21.65 9.6 19.25H14.4Z"/>
    </Icon>
  );
});

IconMaterialSortByAlphaSharpW100.displayName = 'AmauiIconMaterialSortByAlphaSharpW100';

export default IconMaterialSortByAlphaSharpW100;
