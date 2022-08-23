import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreTwoTone'
      short_name='UnfoldMore'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreTwoTone.displayName = 'AmauiIconMaterialUnfoldMoreTwoTone';

export default IconMaterialUnfoldMoreTwoTone;
