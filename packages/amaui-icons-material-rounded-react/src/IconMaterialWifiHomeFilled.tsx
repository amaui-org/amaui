import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiHomeFilled'

      short_name='WifiHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-240q0 29 10.5 54t29.5 44v-28q0-13 8.5-21.5T650-200q13 0 21.5 8.5T680-170v90q0 17-11.5 28.5T640-40h-90q-13 0-21.5-8.5T520-70q0-13 8.5-21.5T550-100h27q-26-27-41.5-63T520-240q0-66 39.5-118t99.5-72q9-3 15 5t6 20q0 12-4.5 23T660-366q-35 17-57.5 50.5T580-240Zm280 0q0-29-10.5-54T820-338v28q0 13-8.5 21.5T790-280q-13 0-21.5-8.5T760-310v-90q0-17 11.5-28.5T800-440h90q13 0 21.5 8.5T920-410q0 13-8.5 21.5T890-380h-27q26 27 41.5 63t15.5 77q0 67-39.5 118.5T781-50q-9 3-15-5t-6-20q0-12 4.5-23t15.5-16q36-17 58-51t22-75Zm-620 80q-33 0-56.5-23.5T160-240v-295l-40 31q-14 10-30 8t-26-16q-10-14-7.5-30T72-568l359-275q22-17 49-17t49 17l360 275q13 10 15 26t-8 30q-10 13-26 15t-29-8l-41-30v26q-19-6-39-8.5t-41-2.5q-117 0-198.5 81.5T440-240q0 21 3 41t9 39H240Z"/>
    </Icon>
  );
});

IconMaterialWifiHomeFilled.displayName = 'AmauiIconMaterialWifiHomeFilled';

export default IconMaterialWifiHomeFilled;
