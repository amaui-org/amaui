import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandLessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessFilled'

      short_name='ExpandLess'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 15.375-1.4-1.4 6-6 6 6-1.4 1.4-4.6-4.6Z"/>
    </Icon>
  );
});

IconMaterialExpandLessFilled.displayName = 'AmauiIconMaterialExpandLessFilled';

export default IconMaterialExpandLessFilled;
