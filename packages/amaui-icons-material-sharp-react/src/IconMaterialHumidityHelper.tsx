import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumidityHelper = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityHelper'

      short_name='HumidityHelper'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80q-133 0-226.5-92T80-396q0-63 24.5-120.5T174-618l226-222 226 222q45 44 69.5 101.5T720-396q0 132-93.5 224T400-80Zm0-80q100 0 170-68.5T640-396q0-47-18-89.5T570-560L400-728 230-560q-34 32-52 74.5T160-396q0 99 70 167.5T400-160Zm340-400q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560ZM400-396Z"/>
    </Icon>
  );
});

IconMaterialHumidityHelper.displayName = 'AmauiIconMaterialHumidityHelper';

export default IconMaterialHumidityHelper;
