import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridViewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.275 0-.487-.213-.213-.212-.213-.487V5q0-.275.213-.488Q4.725 4.3 5 4.3h5.3q.275 0 .488.212Q11 4.725 11 5v5.3q0 .275-.212.487-.213.213-.488.213Zm0 8.7q-.275 0-.487-.213Q4.3 19.275 4.3 19v-5.3q0-.275.213-.488Q4.725 13 5 13h5.3q.275 0 .488.212.212.213.212.488V19q0 .275-.212.487-.213.213-.488.213Zm8.7-8.7q-.275 0-.487-.213Q13 10.575 13 10.3V5q0-.275.213-.488.212-.212.487-.212H19q.275 0 .488.212.212.213.212.488v5.3q0 .275-.212.487Q19.275 11 19 11Zm0 8.7q-.275 0-.487-.213Q13 19.275 13 19v-5.3q0-.275.213-.488.212-.212.487-.212H19q.275 0 .488.212.212.213.212.488V19q0 .275-.212.487-.213.213-.488.213ZM5 10.3h5.3V5H5Zm8.7 0H19V5h-5.3Zm0 8.7H19v-5.3h-5.3ZM5 19h5.3v-5.3H5Zm8.7-8.7Zm0 3.4Zm-3.4 0Zm0-3.4Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100.displayName = 'AmauiIconMaterialGridViewW100';

export default IconMaterialGridViewW100;
