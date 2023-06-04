import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpecificGravityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpecificGravityW100'

      short_name='SpecificGravity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.725 20.7q-.575 0-1.012-.375-.438-.375-.488-.95L4.55 4.125q-.05-.35.188-.588.237-.237.562-.237h13.4q.35 0 .575.237.225.238.175.588l-1.675 15.25q-.05.575-.487.95-.438.375-1.013.375ZM5.75 8.65h3.875q.45-.475 1.063-.738Q11.3 7.65 12 7.65q.7 0 1.312.262.613.263 1.063.738h3.875l.5-4.65H5.225Zm6.25 5q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q13.1 8.35 12 8.35t-1.875.775Q9.35 9.9 9.35 11t.775 1.875q.775.775 1.875.775Zm-6.175-4.3 1.1 9.95q.05.3.275.5.225.2.525.2h8.55q.3 0 .525-.2.225-.2.275-.5l1.1-9.95h-3.25q.2.35.313.775.112.425.112.875 0 1.4-.975 2.375-.975.975-2.375.975t-2.375-.975Q8.65 12.4 8.65 11q0-.45.112-.875.113-.425.313-.775ZM7.725 20h1.35-.425H15.35h-.425 1.35-8.55Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100.displayName = 'AmauiIconMaterialSpecificGravityW100';

export default IconMaterialSpecificGravityW100;
