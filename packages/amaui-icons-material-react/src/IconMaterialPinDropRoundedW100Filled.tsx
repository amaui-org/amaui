import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropRoundedW100Filled'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 17.95Q11.85 17.95 11.713 17.913Q11.575 17.875 11.45 17.775Q8.525 15.45 7.088 13.312Q5.65 11.175 5.65 9.15Q5.65 7.55 6.225 6.338Q6.8 5.125 7.713 4.3Q8.625 3.475 9.75 3.062Q10.875 2.65 12 2.65Q13.125 2.65 14.25 3.062Q15.375 3.475 16.288 4.3Q17.2 5.125 17.775 6.338Q18.35 7.55 18.35 9.15Q18.35 11.175 16.913 13.312Q15.475 15.45 12.55 17.775Q12.425 17.875 12.288 17.913Q12.15 17.95 12 17.95ZM12 10.35Q12.575 10.35 12.963 9.962Q13.35 9.575 13.35 9Q13.35 8.425 12.963 8.037Q12.575 7.65 12 7.65Q11.425 7.65 11.038 8.037Q10.65 8.425 10.65 9Q10.65 9.575 11.038 9.962Q11.425 10.35 12 10.35ZM6 21.35Q5.85 21.35 5.75 21.25Q5.65 21.15 5.65 21Q5.65 20.85 5.75 20.75Q5.85 20.65 6 20.65H18Q18.15 20.65 18.25 20.75Q18.35 20.85 18.35 21Q18.35 21.15 18.25 21.25Q18.15 21.35 18 21.35Z"/>
    </Icon>
  );
});

IconMaterialPinDropRoundedW100Filled.displayName = 'AmauiIconMaterialPinDropRoundedW100Filled';

export default IconMaterialPinDropRoundedW100Filled;
