import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedW100Filled'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 15.1q.4.4 1.063.362.662-.037.987-.462l5.15-7L11 13.1q-.45.3-.512.937-.063.638.362 1.063ZM5.1 18.7q-.2 0-.362-.113-.163-.112-.288-.287-.575-.975-.862-2.075Q3.3 15.125 3.3 14q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.862Q10.2 5.3 12 5.3t3.375.675q1.575.675 2.763 1.837 1.187 1.163 1.875 2.725.687 1.563.687 3.363 0 1.2-.287 2.325-.288 1.125-.863 2.175-.1.175-.275.237-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100Filled.displayName = 'AmauiIconMaterialSpeedW100Filled';

export default IconMaterialSpeedW100Filled;
