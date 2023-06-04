import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPsychologyAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PsychologyAltW100Filled'

      short_name='PsychologyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.525 13.225q.225 0 .375-.15t.15-.375q0-.225-.15-.375t-.375-.15q-.225 0-.375.15T12 12.7q0 .225.15.375t.375.15Zm-.35-1.8h.7q0-.3.038-.437.037-.138.212-.338.1-.1.175-.188.075-.087.175-.187.25-.275.413-.537.162-.263.162-.638 0-.575-.4-.95t-1.05-.375q-.55 0-.975.275-.425.275-.625.775l.65.25q.125-.325.375-.5t.55-.175q.35 0 .563.212.212.213.212.538 0 .2-.1.4t-.35.425q-.125.125-.263.237-.137.113-.237.263-.125.175-.175.387-.05.213-.05.563ZM11.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V16.7H8q-.3 0-.5-.2t-.2-.5v-3.3h-.75q-.35 0-.525-.325-.175-.325.025-.675L7.4 9.35q.2-2.275 1.838-3.663Q10.875 4.3 13 4.3q2.35 0 4.025 1.65 1.675 1.65 1.675 4 0 1.8-1.113 3.275Q16.475 14.7 14.7 15.5v3.45q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPsychologyAltW100Filled.displayName = 'AmauiIconMaterialPsychologyAltW100Filled';

export default IconMaterialPsychologyAltW100Filled;
