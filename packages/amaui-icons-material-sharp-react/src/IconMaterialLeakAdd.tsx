import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeakAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAdd'

      short_name='LeakAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14v-2q1.85 0 3.488-.713 1.637-.712 2.862-1.937t1.938-2.863Q12 4.85 12 3h2q0 2.275-.863 4.275-.862 2-2.362 3.5t-3.5 2.362Q5.275 14 3 14Zm0-4V8q2.075 0 3.537-1.463Q8 5.075 8 3h2q0 2.9-2.05 4.95Q5.9 10 3 10Zm0-4V3h3q0 1.25-.875 2.125T3 6Zm7 15q0-2.275.863-4.275.862-2 2.362-3.5t3.5-2.362Q18.725 10 21 10v2q-1.85 0-3.487.712-1.638.713-2.863 1.938t-1.937 2.862Q12 19.15 12 21Zm4 0q0-2.9 2.05-4.95Q18.1 14 21 14v2q-2.075 0-3.538 1.462Q16 18.925 16 21Zm4 0q0-1.25.875-2.125T21 18v3Z"/>
    </Icon>
  );
});

IconMaterialLeakAdd.displayName = 'AmauiIconMaterialLeakAdd';

export default IconMaterialLeakAdd;
