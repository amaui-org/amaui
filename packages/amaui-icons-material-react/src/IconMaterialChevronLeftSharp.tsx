import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronLeftSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftSharp'
      short_name='ChevronLeft'

      {...props}
    >
      <path d="M14 18 8 12 14 6 15.4 7.4 10.8 12 15.4 16.6Z"/>
    </Icon>
  );
});

IconMaterialChevronLeftSharp.displayName = 'AmauiIconMaterialChevronLeftSharp';

export default IconMaterialChevronLeftSharp;
