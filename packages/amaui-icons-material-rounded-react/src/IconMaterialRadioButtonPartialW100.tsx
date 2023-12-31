import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadioButtonPartialW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioButtonPartialW100'

      short_name='RadioButtonPartial'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-332v-296q-62 0-105 43t-43 105q0 62 43 105t105 43Zm.174 200Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialRadioButtonPartialW100.displayName = 'AmauiIconMaterialRadioButtonPartialW100';

export default IconMaterialRadioButtonPartialW100;
