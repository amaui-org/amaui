import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpacityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityFilled'

      short_name='Opacity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-3.325 0-5.662-2.288Q4 16.425 4 13.15q0-1.65.625-3.075Q5.25 8.65 6.35 7.55L11.3 2.7q.15-.15.325-.225Q11.8 2.4 12 2.4t.375.075q.175.075.325.225l4.95 4.85q1.1 1.1 1.725 2.525Q20 11.5 20 13.15q0 3.275-2.337 5.562Q15.325 21 12 21Zm-5.95-7H17.9q.3-1.8-.338-3.075Q16.925 9.65 16.25 9L12 4.8 7.75 9q-.675.65-1.325 1.925Q5.775 12.2 6.05 14Z"/>
    </Icon>
  );
});

IconMaterialOpacityFilled.displayName = 'AmauiIconMaterialOpacityFilled';

export default IconMaterialOpacityFilled;
