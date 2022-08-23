import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroupRemoveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemoveSharpFilled'
      short_name='GroupRemove'

      {...props}
    >
      <path d="M12.5 11.95Q13.225 11.15 13.613 10.125Q14 9.1 14 8Q14 6.9 13.613 5.875Q13.225 4.85 12.5 4.05Q14 4.25 15 5.375Q16 6.5 16 8Q16 9.5 15 10.625Q14 11.75 12.5 11.95ZM18 20V17Q18 16.1 17.6 15.288Q17.2 14.475 16.55 13.85Q17.825 14.3 18.913 15.012Q20 15.725 20 17V20ZM24 11H18V9H24ZM8 12Q6.35 12 5.175 10.825Q4 9.65 4 8Q4 6.35 5.175 5.175Q6.35 4 8 4Q9.65 4 10.825 5.175Q12 6.35 12 8Q12 9.65 10.825 10.825Q9.65 12 8 12ZM0 20V17.2Q0 16.35 0.438 15.637Q0.875 14.925 1.6 14.55Q3.15 13.775 4.75 13.387Q6.35 13 8 13Q9.65 13 11.25 13.387Q12.85 13.775 14.4 14.55Q15.125 14.925 15.562 15.637Q16 16.35 16 17.2V20Z"/>
    </Icon>
  );
});

IconMaterialGroupRemoveSharpFilled.displayName = 'AmauiIconMaterialGroupRemoveSharpFilled';

export default IconMaterialGroupRemoveSharpFilled;
