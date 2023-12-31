import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ad'

      short_name='Ad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-440H200v440Z"/>
    </Icon>
  );
});

IconMaterialAd.displayName = 'AmauiIconMaterialAd';

export default IconMaterialAd;
