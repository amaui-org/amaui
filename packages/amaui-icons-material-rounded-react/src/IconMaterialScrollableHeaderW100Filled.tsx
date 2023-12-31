import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeaderW100Filled'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-188H200v188q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeaderW100Filled.displayName = 'AmauiIconMaterialScrollableHeaderW100Filled';

export default IconMaterialScrollableHeaderW100Filled;
