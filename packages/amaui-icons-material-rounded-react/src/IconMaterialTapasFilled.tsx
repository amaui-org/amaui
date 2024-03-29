import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapasFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasFilled'

      short_name='Tapas'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22v-8H4q-1.05 0-1.775-.725Q1.5 12.55 1.5 11.5q0-1.05.725-1.775Q2.95 9 4 9h2V8H4q-1.05 0-1.775-.725Q1.5 6.55 1.5 5.5q0-1.05.725-1.775Q2.95 3 4 3h2V2q0-.425.287-.713Q6.575 1 7 1t.713.287Q8 1.575 8 2v1h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 8 10 8H8v1h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 14 10 14H8v8q0 .425-.287.712Q7.425 23 7 23t-.713-.288Q6 22.425 6 22Zm11-1v-7.15q-1.3-.35-2.15-1.4Q14 11.4 14 10V2q0-.425.288-.713Q14.575 1 15 1h6q.425 0 .712.287Q22 1.575 22 2v8q0 1.4-.85 2.45-.85 1.05-2.15 1.4V21h1q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 23 20 23h-4q-.425 0-.712-.288Q15 22.425 15 22t.288-.712Q15.575 21 16 21ZM16 6h4V3h-4Z"/>
    </Icon>
  );
});

IconMaterialTapasFilled.displayName = 'AmauiIconMaterialTapasFilled';

export default IconMaterialTapasFilled;
