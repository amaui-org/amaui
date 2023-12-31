import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvRemoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRemoteFilled'

      short_name='TvRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM360-40q-33 0-56.5-23.5T280-120v-720q0-33 23.5-56.5T360-920h240q33 0 56.5 23.5T680-840v720q0 33-23.5 56.5T600-40H360Zm120-380q-25 0-42.5-17.5T420-480q0-25 17.5-42.5T480-540q25 0 42.5 17.5T540-480q0 25-17.5 42.5T480-420Zm0-300q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialTvRemoteFilled.displayName = 'AmauiIconMaterialTvRemoteFilled';

export default IconMaterialTvRemoteFilled;
