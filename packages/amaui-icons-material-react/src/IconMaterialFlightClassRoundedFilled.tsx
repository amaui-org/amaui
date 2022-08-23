import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassRoundedFilled'
      short_name='FlightClass'

      {...props}
    >
      <path d="M14 13Q13.175 13 12.588 12.412Q12 11.825 12 11V6Q12 5.175 12.588 4.588Q13.175 4 14 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V11Q18 11.825 17.413 12.412Q16.825 13 16 13ZM9.5 18Q8.825 18 8.3 17.613Q7.775 17.225 7.575 16.575L5.075 8.275Q5.025 8.15 5.013 8Q5 7.85 5 7.7V5Q5 4.575 5.287 4.287Q5.575 4 6 4Q6.425 4 6.713 4.287Q7 4.575 7 5V8Q7 8 7 8Q7 8 7 8L9.5 16Q9.5 16 9.5 16Q9.5 16 9.5 16H17Q17.425 16 17.712 16.288Q18 16.575 18 17Q18 17.425 17.712 17.712Q17.425 18 17 18ZM9 21Q8.575 21 8.288 20.712Q8 20.425 8 20Q8 19.575 8.288 19.288Q8.575 19 9 19H17Q17.425 19 17.712 19.288Q18 19.575 18 20Q18 20.425 17.712 20.712Q17.425 21 17 21Z"/>
    </Icon>
  );
});

IconMaterialFlightClassRoundedFilled.displayName = 'AmauiIconMaterialFlightClassRoundedFilled';

export default IconMaterialFlightClassRoundedFilled;
