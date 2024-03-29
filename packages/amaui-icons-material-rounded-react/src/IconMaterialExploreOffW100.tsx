import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreOffW100'

      short_name='ExploreOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.3 11.5-1.8-1.8 2.975-1.675q.25-.125.438.062.187.188.062.438Zm5.3 9.1-1.975-1.975q-1.2 1.025-2.637 1.55Q13.55 20.7 12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.55.525-2.988.525-1.437 1.55-2.637l-2-2q-.1-.1-.087-.238Q3.3 4 3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.088.238-.013.137-.113.237-.125.125-.25.125t-.25-.125Zm-.2-4-.525-.525q.55-.9.837-1.925Q20 13.125 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.125 0-2.15.287-1.025.288-1.925.838L7.4 4.6q1.025-.625 2.175-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.425-.338 1.15-.963 2.175Zm-6-6Zm-1.9 1.9ZM12 20q1.475 0 2.775-.5 1.3-.5 2.35-1.375L12.65 13.65l-4.125 2.325q-.25.125-.437-.062-.188-.188-.063-.438l2.325-4.125-4.475-4.475Q5 7.925 4.5 9.225T4 12q0 3.325 2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialExploreOffW100.displayName = 'AmauiIconMaterialExploreOffW100';

export default IconMaterialExploreOffW100;
