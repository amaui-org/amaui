import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRubric = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rubric'

      short_name='Rubric'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h640v400H240v80h200v80H240v80h200v80H160Zm456 0L504-232l56-56 56 56 142-142 56 56-198 198ZM240-520h200v-80H240v80Zm280 0h200v-80H520v80ZM240-680h200v-80H240v80Zm280 0h200v-80H520v80Z"/>
    </Icon>
  );
});

IconMaterialRubric.displayName = 'AmauiIconMaterialRubric';

export default IconMaterialRubric;
