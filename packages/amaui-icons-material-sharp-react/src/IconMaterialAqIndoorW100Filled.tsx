import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqIndoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqIndoorW100Filled'

      short_name='AqIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m362-442 19-52h4l19 52h-42Zm206 43q-23-1-39.5-16.98Q512-431.959 512-455q0-23.878 16.59-40.439T568.09-512q22.91 0 39.41 16.427 16.5 16.427 16.5 40.112 0 11.461-4.5 20.961Q615-425 609-417l-18-26-21 15 17 25q-4.75 2-9.161 3-4.41 1-9.839 1Zm-259 24h30l13.776-40H414l14 40h31l-60.682-161H370l-61 161Zm306 14 22-15-12-17q13.5-12 20.25-28t6.75-33.984q0-35.151-24.466-60.083Q603.068-540 568-540q-34.588 0-59.294 24.5Q484-491 484-455t24.69 60q24.691 24 59.257 24Q577-371 586-372.5t17.462-6.5L615-361ZM212-212v-402l268-202 268 202v402H212Z"/>
    </Icon>
  );
});

IconMaterialAqIndoorW100Filled.displayName = 'AmauiIconMaterialAqIndoorW100Filled';

export default IconMaterialAqIndoorW100Filled;
