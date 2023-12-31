import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityHelperFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHelperFilled'

      short_name='HumidityHelper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80q-133 0-226.5-92T80-396q0-63 24.5-120.5T174-618l170-167q23-23 56-23t56 23l170 167q45 44 69.5 101.5T720-396q0 132-93.5 224T400-80Zm340-480q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560Z"/>
    </Icon>
  );
});

IconMaterialHumidityHelperFilled.displayName = 'AmauiIconMaterialHumidityHelperFilled';

export default IconMaterialHumidityHelperFilled;
