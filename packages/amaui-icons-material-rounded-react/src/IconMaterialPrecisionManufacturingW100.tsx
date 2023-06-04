import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrecisionManufacturingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrecisionManufacturingW100'

      short_name='PrecisionManufacturing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.6 19q-.25 0-.425-.175T5 18.4q0-.25.175-.425T5.6 17.8H8L5.4 9.3q-.65-.3-1.025-.85Q4 7.9 4 7.15q0-.975.688-1.663Q5.375 4.8 6.35 4.8q.9 0 1.525.562.625.563.825 1.438h3.8V5.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.35l1.85-1.7q.2-.2.438-.238.237-.037.462.088L19.7 5.4q.15.075.238.212.087.138.012.288-.075.15-.212.188-.138.037-.288-.038l-3.85-1.8-2.4 2.2v1.4L15.6 10l3.85-1.8q.15-.075.288-.038.137.038.212.188.075.15-.012.287-.088.138-.238.213l-3.75 1.75q-.225.125-.462.075-.238-.05-.438-.225L13.2 8.8v.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V7.5H8.7q-.075.375-.275.75T8 8.85l4.8 8.95h3.3q.25 0 .425.175t.175.425q0 .25-.175.425T16.1 19Zm.75-10.2q.675 0 1.163-.488Q8 7.825 8 7.15q0-.675-.487-1.163Q7.025 5.5 6.35 5.5t-1.162.487Q4.7 6.475 4.7 7.15t.488 1.162q.487.488 1.162.488Zm2.4 9H12L7.4 9.25q-.2.125-.55.212-.35.088-.65.038Zm3.25 0Z"/>
    </Icon>
  );
});

IconMaterialPrecisionManufacturingW100.displayName = 'AmauiIconMaterialPrecisionManufacturingW100';

export default IconMaterialPrecisionManufacturingW100;
