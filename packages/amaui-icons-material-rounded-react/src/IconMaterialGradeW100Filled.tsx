import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeW100Filled'

      short_name='Grade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.225 17.8q-.225.175-.463.012-.237-.162-.162-.437L9.65 13.9l-2.6-1.875q-.25-.175-.162-.45.087-.275.387-.275h3.275l1.075-3.525q.05-.15.15-.225.1-.075.225-.075t.225.075q.1.075.15.225L13.45 11.3h3.275q.3 0 .388.275.087.275-.163.45l-2.6 1.875 1.05 3.475q.075.275-.162.437-.238.163-.463-.012L12 15.7Z"/>
    </Icon>
  );
});

IconMaterialGradeW100Filled.displayName = 'AmauiIconMaterialGradeW100Filled';

export default IconMaterialGradeW100Filled;
