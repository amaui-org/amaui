import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBRollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBRollFilled'

      short_name='SettingsBRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m723-260-57 58q-6 6-6 14t6 14q6 6 14 6t14-6l78-78q12-12 12-28t-12-28l-78-78q-6-6-14-6t-14 6q-6 6-6 14t6 14l58 58H580q-8 0-14 6t-6 14q0 8 6 14t14 6h143ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-196 0h-79q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 6-28 1.5T170-215L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q8-13 22-17.5t28 1.5l87 36q11-8 22.5-15t24.5-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-6 28-1.5t22 17.5l74 129q8 13 5 28t-15 24l-46 35q-30-15-62-23t-66-8q-20 0-38.5 3.5T604-548q-19-33-51.5-52.5T482-620q-58 0-99 41t-41 99q0 38 18.5 70t50.5 51q-6 20-8.5 41.5T400-275q1 56 22.5 106.5T484-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsBRollFilled.displayName = 'AmauiIconMaterialSettingsBRollFilled';

export default IconMaterialSettingsBRollFilled;
