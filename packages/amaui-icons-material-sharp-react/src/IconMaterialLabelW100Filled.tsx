import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100Filled'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 17.7V6.3h11.075L19.55 12l-4.075 5.7Z"/>
    </Icon>
  );
});

IconMaterialLabelW100Filled.displayName = 'AmauiIconMaterialLabelW100Filled';

export default IconMaterialLabelW100Filled;
