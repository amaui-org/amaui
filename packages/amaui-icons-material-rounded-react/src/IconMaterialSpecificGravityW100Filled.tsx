import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecificGravityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityW100Filled'

      short_name='SpecificGravity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.725 20.7q-.575 0-1.012-.375-.438-.375-.488-.95L4.55 4.125q-.05-.35.188-.588.237-.237.562-.237h13.4q.35 0 .575.237.225.238.175.588l-1.675 15.25q-.05.575-.487.95-.438.375-1.013.375ZM5.75 8.65h3.875q.45-.475 1.063-.738Q11.3 7.65 12 7.65q.7 0 1.312.262.613.263 1.063.738h3.875l.5-4.65H5.225Zm6.25 5q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q13.1 8.35 12 8.35t-1.875.775Q9.35 9.9 9.35 11t.775 1.875q.775.775 1.875.775Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100Filled.displayName = 'AmauiIconMaterialSpecificGravityW100Filled';

export default IconMaterialSpecificGravityW100Filled;
