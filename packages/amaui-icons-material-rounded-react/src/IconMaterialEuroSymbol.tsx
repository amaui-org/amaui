import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroSymbol = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbol'

      short_name='EuroSymbol'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21q-2.95 0-5.25-1.675T6.5 15H4q-.425 0-.712-.288Q3 14.425 3 14t.288-.713Q3.575 13 4 13h2.05Q6 12.725 6 12.5v-1q0-.225.05-.5H4q-.425 0-.712-.288Q3 10.425 3 10t.288-.713Q3.575 9 4 9h2.5q.95-2.65 3.25-4.325Q12.05 3 15 3q1.375 0 2.613.375 1.237.375 2.312 1.075.45.3.488.85.037.55-.388.975-.3.3-.762.35-.463.05-.888-.2-.75-.425-1.6-.675-.85-.25-1.775-.25-1.875 0-3.412.963Q10.05 7.425 9.25 9H14q.425 0 .713.287Q15 9.575 15 10t-.287.712Q14.425 11 14 11H8.6q-.05.275-.075.5-.025.225-.025.5t.025.5q.025.225.075.5H14q.425 0 .713.287.287.288.287.713t-.287.712Q14.425 15 14 15H9.25q.8 1.575 2.338 2.538 1.537.962 3.412.962.9 0 1.775-.25.875-.25 1.6-.675.425-.25.875-.213.45.038.775.363.425.425.388.975-.038.55-.488.85-1.075.7-2.312 1.075Q16.375 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbol.displayName = 'AmauiIconMaterialEuroSymbol';

export default IconMaterialEuroSymbol;
