import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningFilled'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.875 17.7-2.475-.85 1.95-5.375 2.125 4.375q.35.675-.3 1.375-.65.7-1.3.475Zm-6.275-.95 1.075-9.35q.05-.375.338-.513.287-.137.687-.012l2.5.925q.35.15.463.45.112.3-.013.65l-2.825 7.85Zm-7.4 0L4.375 8.9q-.125-.35-.012-.662.112-.313.462-.438l2.5-.925q.35-.15.663-.013Q8.3 7 8.35 7.4l1.05 9.35Zm-4.3.95q-.65.2-1.175-.488-.525-.687-.175-1.362l2.15-4.375 1.925 5.375Zm8-.95L9.7 6q-.05-.425.238-.713Q10.225 5 10.65 5h2.7q.425 0 .712.287.288.288.238.713l-1.2 10.75Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningFilled.displayName = 'AmauiIconMaterialBakeryDiningFilled';

export default IconMaterialBakeryDiningFilled;
