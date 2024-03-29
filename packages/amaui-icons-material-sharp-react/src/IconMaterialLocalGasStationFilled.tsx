import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalGasStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStationFilled'

      short_name='LocalGasStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V3h10v9h3v7.5h2v-8.2q-.225.125-.475.162-.25.038-.525.038-1.05 0-1.775-.725Q15.5 10.05 15.5 9q0-.8.438-1.438.437-.637 1.162-.912L15 4.55l1.05-1.05 3.7 3.6q.375.375.562.875.188.5.188 1.025v12h-5v-7.5H14V21Zm2-11h6V5H6Zm12 0q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStationFilled.displayName = 'AmauiIconMaterialLocalGasStationFilled';

export default IconMaterialLocalGasStationFilled;
