import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivateConnectivityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivityFilled'

      short_name='PrivateConnectivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-2.65 0-4.612-1.712Q5.425 15.575 5.075 13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h2.075q.35-2.575 2.313-4.288Q9.35 5 12 5q2.65 0 4.613 1.712Q18.575 8.425 18.925 11H21q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-2.075q-.35 2.575-2.312 4.288Q14.65 19 12 19Zm-2-3.5h4q.425 0 .713-.288.287-.287.287-.712v-3q0-.425-.287-.713-.288-.287-.713-.287v-.9q0-.875-.575-1.487Q12.85 7.5 12 7.5q-.825 0-1.412.587Q10 8.675 10 9.5v1q-.425 0-.712.287Q9 11.075 9 11.5v3q0 .425.288.712.287.288.712.288Zm2-1.75q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm-1-3.25v-1q0-.425.288-.713.287-.287.712-.287t.713.287Q13 9.075 13 9.5v1Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivityFilled.displayName = 'AmauiIconMaterialPrivateConnectivityFilled';

export default IconMaterialPrivateConnectivityFilled;
