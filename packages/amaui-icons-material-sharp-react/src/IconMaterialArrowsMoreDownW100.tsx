import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownW100'

      short_name='ArrowsMoreDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.7V10H7v9h9v.7ZM10 16V6.3h.7v9h9v.7Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownW100.displayName = 'AmauiIconMaterialArrowsMoreDownW100';

export default IconMaterialArrowsMoreDownW100;
