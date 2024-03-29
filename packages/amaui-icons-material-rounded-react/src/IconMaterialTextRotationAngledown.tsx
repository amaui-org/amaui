import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngledown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngledown'

      short_name='TextRotationAngledown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21q-.425 0-.712-.3-.288-.3-.288-.725t.288-.712q.287-.288.712-.288h.6L2.975 10.35q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3l8.65 8.65v-.6q0-.425.275-.713.275-.287.7-.287.425 0 .713.287.287.288.287.713v3q0 .425-.3.725t-.725.3Zm3.175-6.475q-.175-.175-.225-.438-.05-.262.075-.487l1.05-2.15-3.15-3.125-2.15 1q-.225.125-.487.075-.263-.05-.463-.25-.375-.375-.312-.8.062-.425.562-.65l8.6-3.925q.375-.175.85-.088.475.088.775.388.275.275.363.75.087.475-.088.85l-3.925 8.6q-.225.5-.65.575-.425.075-.825-.325Zm1.6-4.625 2.1-4.35-.075-.075-4.35 2.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngledown.displayName = 'AmauiIconMaterialTextRotationAngledown';

export default IconMaterialTextRotationAngledown;
