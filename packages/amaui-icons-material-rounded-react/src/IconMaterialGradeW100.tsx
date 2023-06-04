import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeW100'

      short_name='Grade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.775ZM9.225 17.8q-.225.175-.463.012-.237-.162-.162-.437L9.65 13.9l-2.575-1.875q-.25-.175-.15-.45T7.3 11.3h3.25l1.075-3.525q.05-.15.15-.225.1-.075.225-.075t.225.075q.1.075.15.225L13.45 11.3h3.25q.275 0 .375.275.1.275-.15.45L14.35 13.9l1.05 3.475q.075.275-.162.437-.238.163-.463-.012L12 15.7Zm.375-1.15 2.4-1.825 2.4 1.825-.875-3.025L15.75 12h-2.8L12 8.9l-.95 3.1h-2.8l2.225 1.625Z"/>
    </Icon>
  );
});

IconMaterialGradeW100.displayName = 'AmauiIconMaterialGradeW100';

export default IconMaterialGradeW100;
