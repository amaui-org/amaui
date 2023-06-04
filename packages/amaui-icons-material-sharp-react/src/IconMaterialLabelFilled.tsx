import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelFilled'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5h13.05L21 12l-4.95 7Z"/>
    </Icon>
  );
});

IconMaterialLabelFilled.displayName = 'AmauiIconMaterialLabelFilled';

export default IconMaterialLabelFilled;
