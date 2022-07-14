import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChevronRightTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronRightTwoTone'
      short_name='ChevronRight'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
    </Icon>
  );
});

export default IconMaterialChevronRightTwoTone;
