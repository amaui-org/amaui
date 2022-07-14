import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareArrowsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsTwoTone'
      short_name='CompareArrows'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/>
    </Icon>
  );
});

export default IconMaterialCompareArrowsTwoTone;
