import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkRight'

      short_name='ForkRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-.425 0-.712-.288Q9 20.425 9 20V6.8l-.9.9q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.9-.9v6.55q.875-.775 1.975-1.113 1.1-.337 2.2-.337.275 0 .538.025.262.025.487.075l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l.9-.9q-.275-.05-.562-.088-.288-.037-.563-.037-1.35 0-2.487.762Q11.45 15.4 11 17v3q0 .425-.287.712Q10.425 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialForkRight.displayName = 'AmauiIconMaterialForkRight';

export default IconMaterialForkRight;
