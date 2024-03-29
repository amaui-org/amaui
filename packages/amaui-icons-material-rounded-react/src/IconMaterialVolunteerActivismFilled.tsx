import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismFilled'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20v-7q0-.825.588-1.413Q2.175 11 3 11t1.412.587Q5 12.175 5 13v7q0 .825-.588 1.413Q3.825 22 3 22t-1.412-.587Q1 20.825 1 20Zm12.375 1.825L7 20.025V11h1.6q.175 0 .35.037.175.038.35.088l6.925 2.575q.35.125.563.45.212.325.212.675 0 .525-.362.85-.363.325-.838.325h-2.625q-.125 0-.187-.012-.063-.013-.163-.063L11.7 15.5q-.2-.075-.4.025t-.25.275q-.05.2.025.375.075.175.275.25l1.475.525q.05.025.15.038.1.012.175.012H20q.8 0 1.4.575.6.575.6 1.425l-7.375 2.775q-.25.1-.613.112-.362.013-.637-.062ZM16 12.675q-.175 0-.337-.05-.163-.05-.288-.175-2.15-1.95-3.762-3.762Q10 6.875 10 5.3q0-1.4.95-2.35Q11.9 2 13.3 2q.8 0 1.5.337.7.338 1.2.913.5-.575 1.2-.913Q17.9 2 18.7 2q1.4 0 2.35.95.95.95.95 2.35 0 1.575-1.612 3.388-1.613 1.812-3.763 3.762-.125.125-.288.175-.162.05-.337.05Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismFilled.displayName = 'AmauiIconMaterialVolunteerActivismFilled';

export default IconMaterialVolunteerActivismFilled;
