import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeaderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeaderW100'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-188H200v188q0 12 10 22t22 10Zm-32-248h560v-280q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v280Zm0 0v-312 312Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeaderW100.displayName = 'AmauiIconMaterialScrollableHeaderW100';

export default IconMaterialScrollableHeaderW100;
