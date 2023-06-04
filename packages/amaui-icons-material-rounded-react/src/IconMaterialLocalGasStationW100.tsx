import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalGasStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationW100'

      short_name='LocalGasStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V5.8q0-.65.425-1.075Q6.15 4.3 6.8 4.3h4.4q.65 0 1.075.425.425.425.425 1.075v5.7h.9q.625 0 1.063.438.437.437.437 1.062v4.6q0 .575.413.987.412.413.987.413t.988-.413q.412-.412.412-.987v-6.7q-.225.15-.475.225-.25.075-.525.075-.725 0-1.212-.488-.488-.487-.488-1.212 0-.65.4-1.137.4-.488 1.05-.563L14.4 5.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l3.1 3.1q.275.275.438.625.162.35.162.725v8.1q0 .875-.612 1.487-.613.613-1.488.613t-1.488-.613q-.612-.612-.612-1.487V13q0-.35-.225-.575-.225-.225-.575-.225h-.9v6.75q0 .325-.212.537-.213.213-.538.213ZM6 10.65h6V5.8q0-.3-.25-.55Q11.5 5 11.2 5H6.8q-.3 0-.55.25Q6 5.5 6 5.8Zm10.9-.15q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q17.325 8.5 16.9 8.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM6 19h6v-7.65H6Zm6 0H6h6Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationW100.displayName = 'AmauiIconMaterialLocalGasStationW100';

export default IconMaterialLocalGasStationW100;
