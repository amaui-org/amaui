import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnRightFilled'

      short_name='TurnRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20q-.425 0-.713-.288Q7 19.425 7 19v-8q0-.825.588-1.413Q8.175 9 9 9h8.2l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l.9-.9H9v8q0 .425-.287.712Q8.425 20 8 20Z"/>
    </Icon>
  );
});

IconMaterialTurnRightFilled.displayName = 'AmauiIconMaterialTurnRightFilled';

export default IconMaterialTurnRightFilled;
