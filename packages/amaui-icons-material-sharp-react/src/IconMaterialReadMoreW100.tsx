import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadMoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadMoreW100'

      short_name='ReadMore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.45 16.525-.475-.475 3.65-3.7H2.65v-.7h7.975l-3.65-3.7.475-.475L11.975 12Zm6.2-.175v-.7h7.7v.7Zm0-8v-.7h7.7v.7Zm3 4v-.7h4.7v.7Z"/>
    </Icon>
  );
});

IconMaterialReadMoreW100.displayName = 'AmauiIconMaterialReadMoreW100';

export default IconMaterialReadMoreW100;
