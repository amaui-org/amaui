import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Straight'

      short_name='Straight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-.425 0-.712-.288Q11 20.425 11 20V6.825l-.9.9Q9.825 8 9.413 8 9 8 8.7 7.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.288.687.012.413-.288.713-.275.275-.7.275-.425 0-.7-.275l-.9-.875V20q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialStraight.displayName = 'AmauiIconMaterialStraight';

export default IconMaterialStraight;
