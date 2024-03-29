import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUlnaRadiusAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UlnaRadiusAltFilled'

      short_name='UlnaRadiusAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 12.775 7.5 4q1.875.925 3.475 2.537 1.6 1.613 2.4 3.363.9-.95 1.988-1.525Q16.45 7.8 18.4 7.3q1.15-.325 1.988-.625.837-.3 1.612-.675v9.65l-7.5 4.725q-.475.3-1.012.462Q12.95 21 12.35 21q-.75 0-1.45-.288-.7-.287-1.275-.812ZM12.75 17.5q.425 0 .713-.288.287-.287.287-.712 0-.05-.1-.425l3.55-2.225q.125.2.338.3.212.1.462.1.425 0 .712-.288.288-.287.288-.712 0-.35-.225-.625t-.575-.35q.025-.05.038-.125.012-.075.012-.15 0-.425-.288-.713Q17.675 11 17.25 11t-.712.287q-.288.288-.288.713 0 .1.175.55l-3.55 2.2q-.125-.225-.363-.363-.237-.137-.512-.137-.425 0-.712.287-.288.288-.288.713 0 .35.225.625t.575.35q-.025.05-.038.125-.012.075-.012.15 0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialUlnaRadiusAltFilled.displayName = 'AmauiIconMaterialUlnaRadiusAltFilled';

export default IconMaterialUlnaRadiusAltFilled;
