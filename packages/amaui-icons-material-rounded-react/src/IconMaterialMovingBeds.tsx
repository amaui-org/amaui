import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovingBeds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingBeds'

      short_name='MovingBeds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V4q0-.825.588-1.413Q3.175 2 4 2h9q.825 0 1.413.587Q15 3.175 15 4v16q0 .825-.587 1.413Q13.825 22 13 22Zm0-11.475q.45-.275.95-.4Q5.45 10 6 10h5q.55 0 1.05.125t.95.4V4H4ZM8.5 9q-.825 0-1.412-.588Q6.5 7.825 6.5 7t.588-1.412Q7.675 5 8.5 5t1.413.588Q10.5 6.175 10.5 7t-.587 1.412Q9.325 9 8.5 9ZM4 20h9v-6q0-.825-.587-1.413Q11.825 12 11 12H6q-.825 0-1.412.587Q4 13.175 4 14v6Zm3.5-3v1q0 .425.288.712.287.288.712.288t.713-.288Q9.5 18.425 9.5 18v-1h1q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q10.925 15 10.5 15h-1v-1q0-.425-.287-.713Q8.925 13 8.5 13t-.712.287Q7.5 13.575 7.5 14v1h-1q-.425 0-.713.287-.287.288-.287.713t.287.712Q6.075 17 6.5 17ZM4 20h9Zm14.8-5.2q-.3-.3-.3-.713 0-.412.3-.712l.375-.375H17q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11h2.175l-.375-.375q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3l2.1 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialMovingBeds.displayName = 'AmauiIconMaterialMovingBeds';

export default IconMaterialMovingBeds;
