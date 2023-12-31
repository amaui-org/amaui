import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRipplesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RipplesW100Filled'

      short_name='Ripples'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm448-374q22 0 42-7t38-19v-156q0-12-10-22t-22-10H572q-12 18-19 38t-7 42q0 56 39 95t95 39Z"/>
    </Icon>
  );
});

IconMaterialRipplesW100Filled.displayName = 'AmauiIconMaterialRipplesW100Filled';

export default IconMaterialRipplesW100Filled;
