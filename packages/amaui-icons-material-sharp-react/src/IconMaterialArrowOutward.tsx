import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowOutward = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowOutward'

      short_name='ArrowOutward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 18 5 16.6 14.6 7H6V5h12v12h-2V8.4Z"/>
    </Icon>
  );
});

IconMaterialArrowOutward.displayName = 'AmauiIconMaterialArrowOutward';

export default IconMaterialArrowOutward;
