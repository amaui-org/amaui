import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiveHelp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiveHelp'

      short_name='LiveHelp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 16.8q.525 0 .888-.362.362-.363.362-.888t-.362-.888q-.363-.362-.888-.362t-.888.362q-.362.363-.362.888t.362.888q.363.362.888.362Zm.95-3.85q0-.9.2-1.325.2-.425.85-1.075.875-.875 1.238-1.463.362-.587.362-1.337 0-1.325-.9-2.138-.9-.812-2.425-.812-1.375 0-2.337.675-.963.675-1.338 1.875L10.2 8q.175-.675.7-1.088.525-.412 1.225-.412.675 0 1.125.362.45.363.45.963 0 .425-.275.9-.275.475-.925 1.05-.825.725-1.137 1.387-.313.663-.313 1.788ZM12 23l-3-3H3V2h18v18h-6Zm-7-5h4.8l2.2 2.2 2.2-2.2H19V4H5ZM5 4v14Z"/>
    </Icon>
  );
});

IconMaterialLiveHelp.displayName = 'AmauiIconMaterialLiveHelp';

export default IconMaterialLiveHelp;
