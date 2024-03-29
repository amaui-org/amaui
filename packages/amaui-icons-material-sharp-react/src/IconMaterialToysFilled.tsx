import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFilled'

      short_name='Toys'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20q-1.125 0-1.963-.712-.837-.713-.987-1.838H2V10.2h2.8L3 8.4l-1 1L.6 8 4 4.6 5.4 6l-1 1 1.4 1.4L7.3 4h9.425l2.025 6.1H22v7.35h-2.05q-.15 1.125-.988 1.838Q18.125 20 17 20q-.95 0-1.712-.55-.763-.55-1.088-1.45H9.8q-.325.9-1.087 1.45Q7.95 20 7 20Zm.4-10H11V6H8.725Zm5.6 0h3.6l-1.325-4H13Zm-6 8q.425 0 .713-.288Q8 17.425 8 17t-.287-.712Q7.425 16 7 16t-.713.288Q6 16.575 6 17t.287.712Q6.575 18 7 18Zm10 0q.425 0 .712-.288Q18 17.425 18 17t-.288-.712Q17.425 16 17 16t-.712.288Q16 16.575 16 17t.288.712Q16.575 18 17 18Z"/>
    </Icon>
  );
});

IconMaterialToysFilled.displayName = 'AmauiIconMaterialToysFilled';

export default IconMaterialToysFilled;
