import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRipplesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RipplesW100'

      short_name='Ripples'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h560v-372q-18 12-38 19t-42 7q-56 0-95-39t-39-95q0-22 7-42t19-38H200v560Zm-28 28v-616h616v616H172Zm28-588v560-560Z"/>
    </Icon>
  );
});

IconMaterialRipplesW100.displayName = 'AmauiIconMaterialRipplesW100';

export default IconMaterialRipplesW100;
