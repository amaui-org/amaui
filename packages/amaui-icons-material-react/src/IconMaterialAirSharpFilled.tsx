import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirSharpFilled'
      short_name='Air'

      {...props}
    >
      <path d="M11.5 20Q10.25 20 9.375 19.125Q8.5 18.25 8.5 17H10.5Q10.5 17.425 10.788 17.712Q11.075 18 11.5 18Q11.925 18 12.213 17.712Q12.5 17.425 12.5 17Q12.5 16.575 12.213 16.288Q11.925 16 11.5 16H2V14H11.5Q12.75 14 13.625 14.875Q14.5 15.75 14.5 17Q14.5 18.25 13.625 19.125Q12.75 20 11.5 20ZM2 10V8H15.5Q16.15 8 16.575 7.575Q17 7.15 17 6.5Q17 5.85 16.575 5.425Q16.15 5 15.5 5Q14.85 5 14.425 5.425Q14 5.85 14 6.5H12Q12 5.025 13.012 4.012Q14.025 3 15.5 3Q16.975 3 17.988 4.012Q19 5.025 19 6.5Q19 7.975 17.988 8.987Q16.975 10 15.5 10ZM18.5 18V16Q19.15 16 19.575 15.575Q20 15.15 20 14.5Q20 13.85 19.575 13.425Q19.15 13 18.5 13H2V11H18.5Q19.975 11 20.988 12.012Q22 13.025 22 14.5Q22 15.975 20.988 16.988Q19.975 18 18.5 18Z"/>
    </Icon>
  );
});

IconMaterialAirSharpFilled.displayName = 'AmauiIconMaterialAirSharpFilled';

export default IconMaterialAirSharpFilled;
