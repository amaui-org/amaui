import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInventoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InventoryW100'

      short_name='Inventory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h4.775q.1-.5.487-.85.388-.35.938-.35.55 0 .938.35.387.35.487.85H18.2q.65 0 1.075.425.425.425.425 1.075V10H19V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-2.5v.5q0 .625-.437 1.062Q14.825 7 14.2 7H9.8q-.625 0-1.062-.438Q8.3 6.125 8.3 5.5V5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25H11Zm4.5-1.7 5.45-5.45q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-5.425 5.425q-.225.225-.525.225-.3 0-.525-.225L12.4 15.9q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125ZM12 5.3q.325 0 .538-.212.212-.213.212-.538 0-.325-.212-.538Q12.325 3.8 12 3.8q-.325 0-.537.212-.213.213-.213.538 0 .325.213.538.212.212.537.212Z"/>
    </Icon>
  );
});

IconMaterialInventoryW100.displayName = 'AmauiIconMaterialInventoryW100';

export default IconMaterialInventoryW100;
