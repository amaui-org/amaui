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
      <path d="M6.375 20.7 4.45 3.3h15.1l-1.925 17.4ZM5.75 8.65h3.875q.45-.475 1.063-.738Q11.3 7.65 12 7.65q.7 0 1.312.262.613.263 1.063.738h3.875l.5-4.65H5.225Zm6.25 5q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q13.1 8.35 12 8.35t-1.875.775Q9.35 9.9 9.35 11t.775 1.875q.775.775 1.875.775Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100Filled.displayName = 'AmauiIconMaterialSpecificGravityW100Filled';

export default IconMaterialSpecificGravityW100Filled;
