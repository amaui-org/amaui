import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreW100Filled'

      short_name='Explore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.35 16.65 5.95-3.35 3.35-5.95-5.95 3.35ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 7.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialExploreW100Filled.displayName = 'AmauiIconMaterialExploreW100Filled';

export default IconMaterialExploreW100Filled;
