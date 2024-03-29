import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFemurAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemurAltFilled'

      short_name='FemurAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 22q-.4-1.175-.6-2.3-.2-1.125-.25-2.15-.05-1.025-.012-1.875.037-.85.112-1.45 0-.025 0 0Q8 14 6.312 13.4q-1.687-.6-3.337-1.9L8.05 3.025l6.425 2.925q1.6.725 2.563 2.2Q18 9.625 18 11.425V22Zm3.65-9q.425 0 .713-.288.287-.287.287-.712 0-.15-.15-.575.275-.1.462-.35.188-.25.188-.575 0-.425-.287-.713Q14.425 9.5 14 9.5q-.325 0-.575.175-.25.175-.35.475L9.425 8.4q.025-.075.075-.4 0-.425-.287-.713Q8.925 7 8.5 7t-.712.287Q7.5 7.575 7.5 8q0 .15.175.55-.275.1-.475.35-.2.25-.2.6 0 .425.287.712.288.288.713.288.35 0 .6-.188.25-.187.35-.487l3.65 1.75-.1.425q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialFemurAltFilled.displayName = 'AmauiIconMaterialFemurAltFilled';

export default IconMaterialFemurAltFilled;
