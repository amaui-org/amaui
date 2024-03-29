import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditAttributesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesFilled'

      short_name='EditAttributes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h10q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm1.05-2.7 3.55-3.55-1.05-1.05-2.5 2.5-1-1L6 12.25Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesFilled.displayName = 'AmauiIconMaterialEditAttributesFilled';

export default IconMaterialEditAttributesFilled;
