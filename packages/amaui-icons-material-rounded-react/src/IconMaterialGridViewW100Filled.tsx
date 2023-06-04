import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridViewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100Filled'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.275 0-.487-.213-.213-.212-.213-.487V5q0-.275.213-.488Q4.725 4.3 5 4.3h5.3q.275 0 .488.212Q11 4.725 11 5v5.3q0 .275-.212.487-.213.213-.488.213Zm0 8.7q-.275 0-.487-.213Q4.3 19.275 4.3 19v-5.3q0-.275.213-.488Q4.725 13 5 13h5.3q.275 0 .488.212.212.213.212.488V19q0 .275-.212.487-.213.213-.488.213Zm8.7-8.7q-.275 0-.487-.213Q13 10.575 13 10.3V5q0-.275.213-.488.212-.212.487-.212H19q.275 0 .488.212.212.213.212.488v5.3q0 .275-.212.487Q19.275 11 19 11Zm0 8.7q-.275 0-.487-.213Q13 19.275 13 19v-5.3q0-.275.213-.488.212-.212.487-.212H19q.275 0 .488.212.212.213.212.488V19q0 .275-.212.487-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100Filled.displayName = 'AmauiIconMaterialGridViewW100Filled';

export default IconMaterialGridViewW100Filled;
