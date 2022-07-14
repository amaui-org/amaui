import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronLeftTwoTone'
      short_name='ChevronLeft'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
    </Icon>
  );
});

export default IconMaterialChevronLeftTwoTone;
