import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeafSparkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeafSparkW100Filled'

      short_name='LeafSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M551-132q-48 0-95.5-18.5T365-204l-67 68q-5 5-10 5t-10-5q-5-5-5-10t5-10l68-67q-36-43-54-90.5T274-409q0-119 82.5-198T551-686h217q25 0 42.5 17.5T828-626v217q0 53-20.5 103.5T747-213q-42 40-92.5 60.5T551-132ZM247-558q0-65 45-110t110-45q-65 0-110-45t-45-110q0 65-45 110T92-713q65 0 110 45t45 110Zm350 83L374-252q-5 5-5 10t5 10q5 5 10.5 4.5t9.5-4.5l223-223q5-5 5-10t-5-10q-5-5-10-5t-10 5Z"/>
    </Icon>
  );
});

IconMaterialLeafSparkW100Filled.displayName = 'AmauiIconMaterialLeafSparkW100Filled';

export default IconMaterialLeafSparkW100Filled;
