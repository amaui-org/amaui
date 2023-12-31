import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeImprovementAndToolsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeImprovementAndToolsFilled'

      short_name='HomeImprovementAndTools'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-880h324q25 0 36 21.5t-3 41.5l-75 105v152H360v-152l-75-105q-14-20-3-41.5t36-21.5Zm42 400h240v80H360v-80Zm0 160h240v87q0 16-6 30.5T577-177l-69 69q-6 6-13 8.5T480-97q-8 0-15-2.5t-13-8.5l-69-69q-11-11-17-25.5t-6-30.5v-87Z"/>
    </Icon>
  );
});

IconMaterialHomeImprovementAndToolsFilled.displayName = 'AmauiIconMaterialHomeImprovementAndToolsFilled';

export default IconMaterialHomeImprovementAndToolsFilled;
