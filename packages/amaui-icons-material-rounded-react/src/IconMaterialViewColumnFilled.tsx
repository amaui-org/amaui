import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnFilled'

      short_name='ViewColumn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18V6q0-.425.288-.713Q3.575 5 4 5h3.325q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712Q7.75 19 7.325 19Zm6.325 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q9.9 5 10.325 5h3.325q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712-.288.288-.713.288Zm6.325 0q-.425 0-.712-.288-.288-.287-.288-.712V6q0-.425.288-.713Q16.225 5 16.65 5h3.325q.425 0 .713.287.287.288.287.713v12q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialViewColumnFilled.displayName = 'AmauiIconMaterialViewColumnFilled';

export default IconMaterialViewColumnFilled;
