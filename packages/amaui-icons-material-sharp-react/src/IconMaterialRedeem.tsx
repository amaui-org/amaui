import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRedeem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Redeem'

      short_name='Redeem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17v2h16v-2Zm-2 4V6h4.2q-.125-.225-.163-.475Q6 5.275 6 5q0-1.25.875-2.125T9 2q.75 0 1.387.387.638.388 1.113.963L12 4l.5-.65q.45-.6 1.1-.975Q14.25 2 15 2q1.25 0 2.125.875T18 5q0 .275-.038.525-.037.25-.162.475H22v15Zm2-7h16V8h-5.1l2.1 2.85L15.4 12 12 7.4 8.6 12 7 10.85 9.05 8H4Zm5-8q.425 0 .713-.287Q10 5.425 10 5t-.287-.713Q9.425 4 9 4t-.712.287Q8 4.575 8 5t.288.713Q8.575 6 9 6Zm6 0q.425 0 .713-.287Q16 5.425 16 5t-.287-.713Q15.425 4 15 4t-.712.287Q14 4.575 14 5t.288.713Q14.575 6 15 6Z"/>
    </Icon>
  );
});

IconMaterialRedeem.displayName = 'AmauiIconMaterialRedeem';

export default IconMaterialRedeem;
