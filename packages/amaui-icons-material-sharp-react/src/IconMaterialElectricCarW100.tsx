import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricCarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCarW100'

      short_name='ElectricCar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 15.7V8.2l2.075-5.9h11.25L19.7 8.2v7.5H19v-2H5v2Zm1-8.2h13.4L17.1 3H6.9Zm-.3.7V13Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 9.6 7.4 9.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.025 9.6 16.6 9.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-3.775 10.95-4.85-2.45h3.2v-1.65l4.85 2.45h-3.2ZM5 13h14V8.2H5Z"/>
    </Icon>
  );
});

IconMaterialElectricCarW100.displayName = 'AmauiIconMaterialElectricCarW100';

export default IconMaterialElectricCarW100;
