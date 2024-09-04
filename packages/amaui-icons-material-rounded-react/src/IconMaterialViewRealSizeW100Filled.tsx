import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewRealSizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewRealSizeW100Filled'

      short_name='ViewRealSize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M336.96-332q-5.96 0-9.96-4.02-4-4.03-4-9.98v-237q0-7-5-12t-12-5h-40q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h40q18.75 0 31.88 13.12Q351-601.75 351-583v237q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm317 0q-5.96 0-9.96-4.02-4-4.03-4-9.98v-237q0-7-5-12t-12-5h-39q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h39q18.75 0 31.88 13.12Q668-601.75 668-583v237q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm-176-134q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Zm0 134q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialViewRealSizeW100Filled.displayName = 'AmauiIconMaterialViewRealSizeW100Filled';

export default IconMaterialViewRealSizeW100Filled;
