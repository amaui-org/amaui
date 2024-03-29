import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PulmonologyFilled'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-1.275 0-2.138-.863Q2 19.275 2 18v-3.825q0-.2.038-.363.037-.162.087-.337l2.5-6.675q.3-.825 1.05-1.313Q6.425 5 7.3 5q.65 0 1.225.325.575.325.95.875V9L7.45 11.025q-.225.225-.212.525.012.3.237.525.225.225.525.225.3 0 .525-.225L11 9.6V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v6.6l2.475 2.475q.225.225.525.225.3 0 .525-.225.225-.225.225-.525 0-.3-.225-.525L14.5 9V6.2q.375-.55.95-.875Q16.025 5 16.675 5q.875 0 1.613.487.737.488 1.062 1.313l2.5 6.675q.05.175.088.337.037.163.037.363V18q0 1.275-.875 2.137-.875.863-2.125.863h-3q-1.25 0-2.112-.863Q13 19.275 13 18v-1.875q0-.05.012-.125.013-.075.013-.125l.35-3.05-1.375-1.4-1.4 1.4.375 3.05q0 .05.013.125.012.075.012.125V18q0 1.275-.875 2.137Q9.25 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialPulmonologyFilled.displayName = 'AmauiIconMaterialPulmonologyFilled';

export default IconMaterialPulmonologyFilled;
