import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarRentalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRentalFilled'

      short_name='CarRental'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 7q-1.25 0-2.125-.875T5 4q0-1.25.875-2.125T8 1q.95 0 1.725.562Q10.5 2.125 10.85 3H19v2h-1v2h-2V5h-5.15q-.35.875-1.125 1.438Q8.95 7 8 7Zm0-2q.425 0 .713-.288Q9 4.425 9 4t-.287-.713Q8.425 3 8 3t-.713.287Q7 3.575 7 4t.287.712Q7.575 5 8 5Zm1 12.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 15.5 9 15.5t-.712.287Q8 16.075 8 16.5t.288.712q.287.288.712.288Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.425 15.5 15 15.5t-.712.287Q14 16.075 14 16.5t.288.712q.287.288.712.288ZM5 22v-7.4L6.925 9h10.15L19 14.6V22h-2v-2H7v2Zm2.65-9h8.7l-.7-2h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRentalFilled.displayName = 'AmauiIconMaterialCarRentalFilled';

export default IconMaterialCarRentalFilled;
