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
      <path d="M8 7q-1.25 0-2.125-.875T5 4q0-1.25.875-2.125T8 1q.95 0 1.725.562Q10.5 2.125 10.85 3H18q.425 0 .712.287Q19 3.575 19 4t-.288.712Q18.425 5 18 5v1q0 .425-.288.713Q17.425 7 17 7t-.712-.287Q16 6.425 16 6V5h-5.15q-.35.875-1.125 1.438Q8.95 7 8 7Zm0-2q.425 0 .713-.288Q9 4.425 9 4t-.287-.713Q8.425 3 8 3t-.713.287Q7 3.575 7 4t.287.712Q7.575 5 8 5Zm1 12.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 15.5 9 15.5t-.712.287Q8 16.075 8 16.5t.288.712q.287.288.712.288Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.425 15.5 15 15.5t-.712.287Q14 16.075 14 16.5t.288.712q.287.288.712.288ZM6 22q-.425 0-.713-.288Q5 21.425 5 21v-6.4l1.65-4.8q.125-.35.412-.575Q7.35 9 7.7 9h8.6q.35 0 .638.225.287.225.412.575L19 14.6V21q0 .425-.288.712Q18.425 22 18 22t-.712-.288Q17 21.425 17 21v-1H7v1q0 .425-.287.712Q6.425 22 6 22Zm1.65-9h8.7l-.7-2h-7.3Z"/>
    </Icon>
  );
});

IconMaterialCarRentalFilled.displayName = 'AmauiIconMaterialCarRentalFilled';

export default IconMaterialCarRentalFilled;
