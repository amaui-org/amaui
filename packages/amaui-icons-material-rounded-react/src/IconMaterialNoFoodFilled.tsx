import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodFilled'

      short_name='NoFood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.625 18.75 11.45 8.6l-.3-2.475q-.05-.45.238-.787.287-.338.737-.338H16V2q0-.425.288-.713Q16.575 1 17 1t.712.287Q18 1.575 18 2v3h3.9q.45 0 .75.325t.25.775ZM2 19q-.425 0-.712-.288Q1 18.425 1 18t.288-.712Q1.575 17 2 17h13q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 19 15 19Zm0 4q-.425 0-.712-.288Q1 22.425 1 22t.288-.712Q1.575 21 2 21h13q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 23 15 23Zm17.775-.425L12.175 15H2.1q-.475 0-.775-.338-.3-.337-.225-.762.475-2.475 2.65-3.688Q5.925 9 8.5 9q.125 0 .262.012.138.013.288.013l-.025 2.825-7.65-7.65q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialNoFoodFilled.displayName = 'AmauiIconMaterialNoFoodFilled';

export default IconMaterialNoFoodFilled;
