import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltFilled'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 6q0-.425.288-.713Q10.4 5 10.825 5H20q.425 0 .712.287Q21 5.575 21 6v4.5q0 .425-.288.712-.287.288-.712.288h-9.175q-.425 0-.712-.288-.288-.287-.288-.712ZM4 19q-.425 0-.712-.288Q3 18.425 3 18V6q0-.425.288-.713Q3.575 5 4 5h3.825q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712Q8.25 19 7.825 19Zm16-6.5q.425 0 .712.287.288.288.288.713V18q0 .425-.288.712Q20.425 19 20 19h-3.075q-.425 0-.713-.288-.287-.287-.287-.712v-4.5q0-.425.287-.713.288-.287.713-.287Zm-10.175 1q0-.425.288-.713.287-.287.712-.287h3.1q.425 0 .713.287.287.288.287.713V18q0 .425-.287.712-.288.288-.713.288h-3.1q-.425 0-.712-.288-.288-.287-.288-.712Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltFilled.displayName = 'AmauiIconMaterialViewQuiltFilled';

export default IconMaterialViewQuiltFilled;
