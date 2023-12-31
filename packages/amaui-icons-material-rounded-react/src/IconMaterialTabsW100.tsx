import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabsW100'

      short_name='Tabs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-280H200v280q0 12 10 22t22 10Zm-32-340h560v-188q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v188Zm480-100q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H520q-17 0-28.5 11.5T480-680q0 17 11.5 28.5T520-640h160ZM200-540v-220 220Z"/>
    </Icon>
  );
});

IconMaterialTabsW100.displayName = 'AmauiIconMaterialTabsW100';

export default IconMaterialTabsW100;
