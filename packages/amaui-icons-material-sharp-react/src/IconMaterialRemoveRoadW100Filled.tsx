import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveRoadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadW100Filled'

      short_name='RemoveRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 12.95v-8.3h.7v8.3Zm-11.4 6.7v-15h.7v15Zm5.7-12v-3h.7v3Zm0 6v-3h.7v3Zm0 6v-3h.7v3Zm3.475 1.25 2.1-2.1-2.125-2.125.5-.5 2.125 2.125 2.1-2.125.5.5-2.1 2.1 2.1 2.125-.5.5-2.1-2.125L15.6 21.4Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadW100Filled.displayName = 'AmauiIconMaterialRemoveRoadW100Filled';

export default IconMaterialRemoveRoadW100Filled;
