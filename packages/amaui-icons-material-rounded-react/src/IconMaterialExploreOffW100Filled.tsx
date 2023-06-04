import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffW100Filled'

      short_name='ExploreOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.125 20.6q-.125.125-.25.125t-.25-.125l-1.975-1.975q-1.2 1.025-2.638 1.55-1.437.525-2.987.525-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.862-2.763Q3.325 13.8 3.325 12q0-1.55.525-2.988.525-1.437 1.55-2.637l-2-2q-.1-.1-.088-.238.013-.137.113-.237.125-.125.25-.125t.25.125L20.15 20.125q.1.1.088.238-.013.137-.113.237Zm-.7-4-5.1-5.1L16 8.525q.15-.25-.05-.45t-.45-.05L12.525 9.7l-5.1-5.1Q8.45 3.975 9.6 3.637q1.15-.337 2.425-.337 1.8 0 3.388.687Q17 4.675 18.175 5.85t1.863 2.762q.687 1.588.687 3.388 0 1.275-.337 2.425-.338 1.15-.963 2.175ZM8.55 15.975l4.125-2.325-2.3-2.3-2.325 4.125q-.15.25.05.45t.45.05Z"/>
    </Icon>
  );
});

IconMaterialExploreOffW100Filled.displayName = 'AmauiIconMaterialExploreOffW100Filled';

export default IconMaterialExploreOffW100Filled;
