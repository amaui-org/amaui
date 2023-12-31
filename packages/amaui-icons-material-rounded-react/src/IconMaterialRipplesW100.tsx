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
      <path d="M232-200h496q12 0 22-10t10-22v-340q-18 12-38 19t-42 7q-56 0-95-39t-39-95q0-22 7-42t19-38H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm0 28q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-588v560-560Z"/>
    </Icon>
  );
});

IconMaterialRipplesW100.displayName = 'AmauiIconMaterialRipplesW100';

export default IconMaterialRipplesW100;
