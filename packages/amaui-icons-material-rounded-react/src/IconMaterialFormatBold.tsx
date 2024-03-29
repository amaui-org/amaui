import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatBold = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBold'

      short_name='FormatBold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V6q0-.825.588-1.412Q8.175 4 9 4h3.5q1.7 0 2.975.975 1.275.975 1.275 2.675 0 1.2-.55 1.912-.55.713-1.3 1.088v.2q1.1.375 1.725 1.175t.625 2.075q0 1.875-1.363 2.888Q14.525 18 12.65 18Zm.65-8.3h2.65q.825 0 1.363-.475.537-.475.537-1.2t-.537-1.2q-.538-.475-1.363-.475H9.65Zm0 5.9h2.85q.975 0 1.538-.5.562-.5.562-1.325t-.562-1.325q-.563-.5-1.538-.5H9.65Z"/>
    </Icon>
  );
});

IconMaterialFormatBold.displayName = 'AmauiIconMaterialFormatBold';

export default IconMaterialFormatBold;
