import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewspaperSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperSharpFilled'
      short_name='Newspaper'

      {...props}
    >
      <path d="M2 21V3L3.675 4.675L5.325 3L7 4.675L8.675 3L10.325 4.675L12 3L13.675 4.675L15.325 3L17 4.675L18.675 3L20.325 4.675L22 3V21ZM4 19H11V13H4ZM13 19H20V17H13ZM13 15H20V13H13ZM4 11H20V8H4Z"/>
    </Icon>
  );
});

IconMaterialNewspaperSharpFilled.displayName = 'AmauiIconMaterialNewspaperSharpFilled';

export default IconMaterialNewspaperSharpFilled;
