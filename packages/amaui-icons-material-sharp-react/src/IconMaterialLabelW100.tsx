import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelW100'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.45 17.7V6.3h11.075L19.55 12l-4.075 5.7Zm.7-.7h9.975l3.575-5-3.575-5H5.15Zm0-10v10Z"/>
    </Icon>
  );
});

IconMaterialLabelW100.displayName = 'AmauiIconMaterialLabelW100';

export default IconMaterialLabelW100;
