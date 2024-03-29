import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapsUgcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapsUgcFilled'

      short_name='MapsUgc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1.525 21.25 1.45-4.95q-.475-1.025-.712-2.1-.238-1.075-.238-2.2 0-2.075.787-3.9Q3.6 6.275 4.95 4.925q1.35-1.35 3.175-2.138Q9.95 2 12.025 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.138 3.175.787 1.825.787 3.9t-.787 3.9q-.788 1.825-2.138 3.175-1.35 1.35-3.175 2.137-1.825.788-3.9.788-1.125 0-2.2-.238-1.075-.237-2.1-.712l-4.95 1.45q-.575.175-1-.25-.425-.425-.25-1Zm10.5-5.25q.425 0 .713-.288.287-.287.287-.712v-2h2q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q15.45 11 15.025 11h-2V9q0-.425-.287-.713Q12.45 8 12.025 8t-.713.287q-.287.288-.287.713v2h-2q-.425 0-.713.287-.287.288-.287.713t.287.712Q8.6 13 9.025 13h2v2q0 .425.287.712.288.288.713.288Z"/>
    </Icon>
  );
});

IconMaterialMapsUgcFilled.displayName = 'AmauiIconMaterialMapsUgcFilled';

export default IconMaterialMapsUgcFilled;
