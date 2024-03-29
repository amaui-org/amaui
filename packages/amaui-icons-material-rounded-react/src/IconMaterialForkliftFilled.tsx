import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkliftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkliftFilled'

      short_name='Forklift'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-1.25 0-2.125-.875T1 18q0-.65.25-1.237.25-.588.75-1.013V12q0-.425.288-.713Q2.575 11 3 11h1V6q0-.425.287-.713Q4.575 5 5 5h5.675q.6 0 1.1.325.5.325.75.9l4.175 9.85q.15.35.225.7.075.35.075.725 0 1.45-1.025 2.475Q14.95 21 13.5 21q-1.025 0-1.887-.538-.863-.537-1.288-1.462h-3.5q-.325.9-1.1 1.45Q4.95 21 4 21Zm18-1h-3q-.425 0-.712-.288Q18 19.425 18 19V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v13h2q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 20 22 20ZM4 19q.425 0 .713-.288Q5 18.425 5 18t-.287-.712Q4.425 17 4 17t-.712.288Q3 17.575 3 18t.288.712Q3.575 19 4 19Zm9.5 0q.625 0 1.062-.438Q15 18.125 15 17.5t-.438-1.062Q14.125 16 13.5 16t-1.062.438Q12 16.875 12 17.5t.438 1.062Q12.875 19 13.5 19Zm-4.575-5h4.725l-2.975-7H6v4Z"/>
    </Icon>
  );
});

IconMaterialForkliftFilled.displayName = 'AmauiIconMaterialForkliftFilled';

export default IconMaterialForkliftFilled;
