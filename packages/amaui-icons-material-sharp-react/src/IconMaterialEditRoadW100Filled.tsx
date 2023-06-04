import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoadW100Filled'

      short_name='EditRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 14.05v-9.4h.7v8.7Zm-11.4 5.6v-15h.7v15Zm5.7-12v-3h.7v3Zm0 6v-3h.7v3Zm0 6v-3h.7v3Zm9.625-5.7-.5-.5.8-.8.5.5Zm-6.2 5.7v-.5l5-5 .5.5-5 5Z"/>
    </Icon>
  );
});

IconMaterialEditRoadW100Filled.displayName = 'AmauiIconMaterialEditRoadW100Filled';

export default IconMaterialEditRoadW100Filled;
