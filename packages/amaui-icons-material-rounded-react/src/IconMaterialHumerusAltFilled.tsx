import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHumerusAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumerusAltFilled'

      short_name='HumerusAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 12.775 7.5 4q1.875.925 3.475 2.537 1.6 1.613 2.4 3.363.9-.95 1.988-1.525Q16.45 7.8 18.4 7.3q1.15-.325 1.988-.625.837-.3 1.612-.675v9.65l-7.5 4.725q-.475.3-1.012.462Q12.95 21 12.35 21q-.75 0-1.45-.288-.7-.287-1.275-.812ZM10 16q.425 0 .713-.288Q11 15.425 11 15v-.1q0-.05-.025-.1.425 0 .725-.288.3-.287.3-.712t-.287-.713Q11.425 12.8 11 12.8q-.2 0-.387.087-.188.088-.313.213l-2.575-2.9q.125-.125.2-.313Q8 9.7 8 9.5q0-.425-.287-.713Q7.425 8.5 7 8.5t-.713.287Q6 9.075 6 9.5v.1q0 .05.025.1-.425 0-.725.287-.3.288-.3.713t.287.712q.288.288.713.288.225 0 .413-.088.187-.087.312-.237l2.575 2.9q-.15.125-.225.325Q9 14.8 9 15q0 .425.288.712Q9.575 16 10 16Z"/>
    </Icon>
  );
});

IconMaterialHumerusAltFilled.displayName = 'AmauiIconMaterialHumerusAltFilled';

export default IconMaterialHumerusAltFilled;
