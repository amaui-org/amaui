import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownSharpW100'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M6.3 19.7V10H7v9h9v.7ZM10 16V6.3h.7v9h9v.7Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreDownSharpW100.displayName = 'AmauiIconMaterialArrowsMoreDownSharpW100';

export default IconMaterialArrowsMoreDownSharpW100;
