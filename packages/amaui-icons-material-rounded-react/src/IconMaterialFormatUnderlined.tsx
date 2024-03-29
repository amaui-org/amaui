import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatUnderlined = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlined'

      short_name='FormatUnderlined'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.425 0-.713-.288Q5 20.425 5 20t.287-.712Q5.575 19 6 19h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 21 18 21Zm6-4q-2.525 0-4.263-1.738Q6 13.525 6 11V4.25q0-.525.363-.888Q6.725 3 7.25 3t.887.362q.363.363.363.888V11q0 1.475 1.012 2.488Q10.525 14.5 12 14.5t2.488-1.012Q15.5 12.475 15.5 11V4.25q0-.525.363-.888Q16.225 3 16.75 3t.888.362q.362.363.362.888V11q0 2.525-1.738 4.262Q14.525 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlined.displayName = 'AmauiIconMaterialFormatUnderlined';

export default IconMaterialFormatUnderlined;
