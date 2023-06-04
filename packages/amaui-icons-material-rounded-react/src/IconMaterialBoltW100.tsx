import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltW100'

      short_name='Bolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.825 19.7q-.225 0-.362-.15-.138-.15-.088-.375l.775-5.475h-2.5q-.35 0-.4-.175-.05-.175.1-.475l4.35-8.475q.05-.125.2-.2.15-.075.275-.075.225 0 .363.15.137.15.087.375L12.85 10.3h2.5q.3 0 .375.175.075.175-.075.475l-4.35 8.475q-.05.125-.2.2-.15.075-.275.075Z"/>
    </Icon>
  );
});

IconMaterialBoltW100.displayName = 'AmauiIconMaterialBoltW100';

export default IconMaterialBoltW100;
