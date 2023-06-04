import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 20.7v-4H2.45l4-6H4.5L9 4.25l3 4.3 3-4.3 4.5 6.45h-1.95l4 6H15.7v4h-1.4v-4H9.7v4Zm6.775-4.7h5.175l-4-6h1.9L15 5.5l-2.55 3.65 1.05 1.55h-1.95ZM3.75 16h10.5l-4-6h1.9L9 5.5 5.85 10h1.9Zm0 0h4-1.9 6.3-1.9 4Zm11.325 0H11.55h1.95-1.05H18.15h-1.9 4Zm-.775.7h1.4-1.4Zm1.25 0Z"/>
    </Icon>
  );
});

IconMaterialForestW100.displayName = 'AmauiIconMaterialForestW100';

export default IconMaterialForestW100;
