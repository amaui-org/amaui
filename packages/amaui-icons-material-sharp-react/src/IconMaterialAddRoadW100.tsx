import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRoadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadW100'

      short_name='AddRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 22.65v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm0-9.7v-8.3h.7v8.3Zm-11.4 6.7v-15h.7v15Zm5.7-12v-3h.7v3Zm0 6v-3h.7v3Zm0 6v-3h.7v3Z"/>
    </Icon>
  );
});

IconMaterialAddRoadW100.displayName = 'AmauiIconMaterialAddRoadW100';

export default IconMaterialAddRoadW100;
