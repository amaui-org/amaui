import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronLeftSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftSharpW100'
      short_name='ChevronLeft'

      {...props}
    >
      <path d="M14 17.1 8.9 12 14 6.9 14.5 7.4 9.9 12 14.5 16.6Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftSharpW100.displayName = 'AmauiIconMaterialChevronLeftSharpW100';

export default IconMaterialChevronLeftSharpW100;
