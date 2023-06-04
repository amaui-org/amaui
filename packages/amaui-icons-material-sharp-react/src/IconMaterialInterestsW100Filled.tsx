import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInterestsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterestsW100Filled'

      short_name='Interests'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3 10.25 4.05-6.975 4.05 6.975Zm4.075 10.125q-1.425 0-2.4-.975Q3.7 18.425 3.7 17q0-1.425.975-2.4.975-.975 2.4-.975 1.425 0 2.4.975.975.975.975 2.4 0 1.425-.975 2.4-.975.975-2.4.975Zm6.6 0v-6.75h6.75v6.75ZM17.05 10.25q-.775-.6-1.487-1.175Q14.85 8.5 14.3 7.912q-.55-.587-.875-1.187-.325-.6-.325-1.25 0-.825.525-1.35.525-.525 1.35-.525.575 0 1.075.287.5.288 1 .888.5-.575 1.025-.875.525-.3 1.075-.3.8 0 1.325.562Q21 4.725 21 5.55q0 .625-.325 1.212-.325.588-.875 1.163-.55.575-1.262 1.15-.713.575-1.488 1.175Z"/>
    </Icon>
  );
});

IconMaterialInterestsW100Filled.displayName = 'AmauiIconMaterialInterestsW100Filled';

export default IconMaterialInterestsW100Filled;
