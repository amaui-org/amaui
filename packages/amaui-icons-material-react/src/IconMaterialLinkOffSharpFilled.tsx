import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffSharpFilled'
      short_name='LinkOff'

      {...props}
    >
      <path d="M19.25 16.45 17.75 14.9Q18.725 14.625 19.363 13.837Q20 13.05 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H13V7H17Q19.075 7 20.538 8.438Q22 9.875 22 12Q22 13.425 21.25 14.637Q20.5 15.85 19.25 16.45ZM15.85 13 13.85 11H16V13ZM19.8 22.6 1.4 4.2 2.8 2.8 21.2 21.2ZM11 17H7Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 10.25 3.062 8.912Q4.125 7.575 5.75 7.15L7.6 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H11ZM8 13V11H9.625L11.6 13Z"/>
    </Icon>
  );
});

IconMaterialLinkOffSharpFilled.displayName = 'AmauiIconMaterialLinkOffSharpFilled';

export default IconMaterialLinkOffSharpFilled;
