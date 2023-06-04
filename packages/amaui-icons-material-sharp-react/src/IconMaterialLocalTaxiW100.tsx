import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalTaxiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalTaxiW100'

      short_name='LocalTaxi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7v-7.5l2.075-5.9H10.2V4.9h3.7v1.4h3.725l2.075 5.9v7.5H19v-2H5v2Zm1-8.2h13.4L17.1 7H6.9Zm-.3.7V17Zm2.4 3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 13.6 7.4 13.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm9.2 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM5 17h14v-4.8H5Z"/>
    </Icon>
  );
});

IconMaterialLocalTaxiW100.displayName = 'AmauiIconMaterialLocalTaxiW100';

export default IconMaterialLocalTaxiW100;
