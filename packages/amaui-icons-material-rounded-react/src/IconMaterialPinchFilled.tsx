import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinchFilled'

      short_name='Pinch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 11q-.425 0-.712-.288Q1 10.425 1 10V6.75q0-.325.212-.537Q1.425 6 1.75 6q.325 0 .538.213.212.212.212.537v1.7L8.45 2.5h-1.7q-.325 0-.537-.213Q6 2.075 6 1.75q0-.325.213-.538Q6.425 1 6.75 1H10q.425 0 .713.287Q11 1.575 11 2v3.25q0 .325-.212.537Q10.575 6 10.25 6q-.325 0-.537-.213Q9.5 5.575 9.5 5.25v-1.7L3.55 9.5h1.7q.325 0 .537.212.213.213.213.538 0 .325-.213.537Q5.575 11 5.25 11Zm12.325 12q-.45 0-.912-.163-.463-.162-.738-.437L8.8 18.325q-.275-.275-.288-.7-.012-.425.213-.75.175-.25.475-.363.3-.112.675-.012l3.25.75V6.5q0-.625.437-1.062Q14 5 14.625 5t1.063.438q.437.437.437 1.062v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.863.3.587.2 1.212l-.625 4.45q-.125.75-.675 1.237-.55.488-1.3.488Z"/>
    </Icon>
  );
});

IconMaterialPinchFilled.displayName = 'AmauiIconMaterialPinchFilled';

export default IconMaterialPinchFilled;
