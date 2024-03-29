import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFmdBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FmdBad'

      short_name='FmdBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q.425 0 .713-.288Q13 10.425 13 10V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v3q0 .425.288.712.287.288.712.288Zm0 4q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm0 4.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM12 10.2Z"/>
    </Icon>
  );
});

IconMaterialFmdBad.displayName = 'AmauiIconMaterialFmdBad';

export default IconMaterialFmdBad;
