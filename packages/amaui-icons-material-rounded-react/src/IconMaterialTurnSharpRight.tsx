import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSharpRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSharpRight'

      short_name='TurnSharpRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.425 0-.713-.288Q6 20.425 6 20v-5q0-.825.588-1.413Q7.175 13 8 13h8V6.825l-.9.9Q14.825 8 14.413 8 14 8 13.7 7.7q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.275.687 0 .413-.275.713-.3.3-.713.3-.412 0-.712-.3L18 6.825V13q0 .825-.587 1.412Q16.825 15 16 15H8v5q0 .425-.287.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialTurnSharpRight.displayName = 'AmauiIconMaterialTurnSharpRight';

export default IconMaterialTurnSharpRight;
