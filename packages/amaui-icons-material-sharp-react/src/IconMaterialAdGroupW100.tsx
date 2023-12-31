import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupW100'

      short_name='AdGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M294-320h480v-400H294v400Zm-28 28v-536h536v536H266ZM158-184v-504h28v476h476v28H158Zm136-136v-480 480Z"/>
    </Icon>
  );
});

IconMaterialAdGroupW100.displayName = 'AmauiIconMaterialAdGroupW100';

export default IconMaterialAdGroupW100;
