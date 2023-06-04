import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoLabelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabelW100'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M782 576 621 804H178V348h441l163 228Zm-34 0L605 376H206v400h399l143-200Zm-542 0v200-400 200Zm221 110 34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Z"/>
    </Icon>
  );
});

IconMaterialAutoLabelW100.displayName = 'AmauiIconMaterialAutoLabelW100';

export default IconMaterialAutoLabelW100;
