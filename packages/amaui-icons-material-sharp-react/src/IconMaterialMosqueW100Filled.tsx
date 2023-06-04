import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMosqueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100Filled'

      short_name='Mosque'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 8.95q-.4 0-.4-.675V7.1q0-.825.4-1.538.4-.712 1.075-1.162L12 1.775 15.875 4.4q.675.45 1.075 1.162.4.713.4 1.538v1.175q0 .675-.4.675Zm-5.4 11.4v-12q-.45-.2-.725-.55Q.65 7.45.65 7q0-.4.325-.913Q1.3 5.575 2 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v5.3h3.3v-4h12.7v4h3.3v-5.3q-.45-.2-.725-.55-.275-.35-.275-.8 0-.4.325-.913Q21.3 5.575 22 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v12h-8.7v-5h-3.3v5Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100Filled.displayName = 'AmauiIconMaterialMosqueW100Filled';

export default IconMaterialMosqueW100Filled;
