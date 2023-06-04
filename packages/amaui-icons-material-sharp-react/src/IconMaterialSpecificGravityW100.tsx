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
      <path d="M6.375 20.7 4.45 3.3h15.1l-1.925 17.4ZM5.75 8.65h3.875q.45-.475 1.063-.738Q11.3 7.65 12 7.65q.7 0 1.312.262.613.263 1.063.738h3.875l.5-4.65H5.225Zm6.25 5q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q13.1 8.35 12 8.35t-1.875.775Q9.35 9.9 9.35 11t.775 1.875q.775.775 1.875.775Zm-6.175-4.3L7 20h10l1.175-10.65h-3.25q.2.35.313.775.112.425.112.875 0 1.4-.975 2.375-.975.975-2.375.975t-2.375-.975Q8.65 12.4 8.65 11q0-.45.112-.875.113-.425.313-.775ZM7 20h2.075-.425H15.35h-.425H17 7Z"/>
    </Icon>
  );
});

IconMaterialSpecificGravityW100.displayName = 'AmauiIconMaterialSpecificGravityW100';

export default IconMaterialSpecificGravityW100;
