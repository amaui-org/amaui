import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightShelterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightShelterW100'

      short_name='NightShelter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 19.7q-.625 0-1.062-.438Q5.3 18.825 5.3 18.2v-7.8q0-.35.163-.675.162-.325.437-.525l5.2-3.95q.4-.3.9-.3t.9.3l5.2 3.95q.275.2.438.525.162.325.162.675v7.8q0 .625-.438 1.062-.437.438-1.062.438ZM6 19h12v-9l-6-4.55L6 10Zm2.8-2.9h6.4v.8q0 .175.112.288.113.112.288.112t.287-.112Q16 17.075 16 16.9v-2.8q0-.65-.475-1.125T14.4 12.5H12q-.175 0-.287.113-.113.112-.113.287v2.4H8.8v-3.2q0-.175-.112-.288-.113-.112-.288-.112t-.287.112Q8 11.925 8 12.1v4.8q0 .175.113.288.112.112.287.112t.288-.112q.112-.113.112-.288Zm1.4-1.2q.425 0 .713-.287.287-.288.287-.713t-.287-.712q-.288-.288-.713-.288t-.712.288q-.288.287-.288.712t.288.713q.287.287.712.287ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialNightShelterW100.displayName = 'AmauiIconMaterialNightShelterW100';

export default IconMaterialNightShelterW100;
