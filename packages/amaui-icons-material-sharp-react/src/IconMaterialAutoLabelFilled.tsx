import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoLabelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoLabelFilled'

      short_name='AutoLabel'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 576 642 856H120V296h522l198 280ZM421 736l50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAutoLabelFilled.displayName = 'AmauiIconMaterialAutoLabelFilled';

export default IconMaterialAutoLabelFilled;
