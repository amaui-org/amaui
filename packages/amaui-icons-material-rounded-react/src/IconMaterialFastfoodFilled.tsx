import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastfoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodFilled'

      short_name='Fastfood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.15 15q-.475 0-.775-.338-.3-.337-.225-.762.475-2.475 2.65-3.688Q5.975 9 8.55 9t4.75 1.212q2.175 1.213 2.65 3.688.075.425-.225.762-.3.338-.775.338Zm15.9 8v-8q0-2.875-1.762-4.887Q14.525 8.1 11.325 7.3L11.2 6.125q-.05-.45.238-.787.287-.338.737-.338h3.875V2q0-.425.287-.713Q16.625 1 17.05 1t.713.287q.287.288.287.713v3h3.9q.45 0 .75.325t.25.775L21.4 21.55q-.075.6-.537 1.025Q20.4 23 19.75 23ZM2 19q-.425 0-.712-.288Q1 18.425 1 18t.288-.712Q1.575 17 2 17h13q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 19 15 19Zm0 4q-.425 0-.712-.288Q1 22.425 1 22t.288-.712Q1.575 21 2 21h13q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 23 15 23Z"/>
    </Icon>
  );
});

IconMaterialFastfoodFilled.displayName = 'AmauiIconMaterialFastfoodFilled';

export default IconMaterialFastfoodFilled;
