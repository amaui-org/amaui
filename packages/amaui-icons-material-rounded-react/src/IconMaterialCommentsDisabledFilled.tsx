import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledFilled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V4.825L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.712-.3q.413 0 .713.3l18.4 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3L15.175 18Zm18 1.125L16.875 14H17q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12h-2.125l-1-1H17q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-5.125l-1-1H17q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H8.875l-4-4H20q.825 0 1.413.587Q22 3.175 22 4ZM11.175 14l-2-2H7q-.425 0-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14ZM7 11h1.175L6.4 9.2q-.175.15-.287.362Q6 9.775 6 10q0 .425.287.712Q6.575 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledFilled.displayName = 'AmauiIconMaterialCommentsDisabledFilled';

export default IconMaterialCommentsDisabledFilled;
