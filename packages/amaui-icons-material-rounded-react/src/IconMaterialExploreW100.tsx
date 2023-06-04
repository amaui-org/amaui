import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreW100'

      short_name='Explore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.525 16 4.6-2.6q.1-.05.163-.113.062-.062.112-.162l2.6-4.6q.15-.25-.05-.45T15.475 8l-4.6 2.6q-.1.05-.162.112-.063.063-.113.163l-2.6 4.6q-.15.25.062.463.213.212.463.062ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 7.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-8.7Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialExploreW100.displayName = 'AmauiIconMaterialExploreW100';

export default IconMaterialExploreW100;
