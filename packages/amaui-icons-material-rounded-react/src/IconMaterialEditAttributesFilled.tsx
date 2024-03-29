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
      <path d="M7 17q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h10q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Zm1.05-3.125q.2 0 .375-.063.175-.062.325-.212l2.325-2.325q.225-.225.225-.525 0-.3-.225-.525Q10.85 10 10.55 10q-.3 0-.525.225L8.05 12.2l-.475-.475Q7.35 11.5 7.05 11.5q-.3 0-.525.225-.225.225-.225.525 0 .3.225.525l.825.825q.15.15.325.212.175.063.375.063Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesFilled.displayName = 'AmauiIconMaterialEditAttributesFilled';

export default IconMaterialEditAttributesFilled;
