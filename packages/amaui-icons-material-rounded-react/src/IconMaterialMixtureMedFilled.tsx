import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMixtureMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedFilled'

      short_name='MixtureMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17H5q-.825 0-1.413-.587Q3 15.825 3 15V7.5q-.425 0-.712-.287Q2 6.925 2 6.5t.288-.713Q2.575 5.5 3 5.5h3V4h-.5q-.425 0-.713-.288Q4.5 3.425 4.5 3t.287-.713Q5.075 2 5.5 2h3q.425 0 .713.287.287.288.287.713t-.287.712Q8.925 4 8.5 4H8v1.5h3q.425 0 .713.287.287.288.287.713t-.287.713Q11.425 7.5 11 7.5V15q0 .825-.587 1.413Q9.825 17 9 17H8v4.5q0 .3-.275.45-.275.15-.525-.05l-.8-.6q-.2-.15-.3-.35-.1-.2-.1-.45Zm11 5q-1.65 0-2.825-1.175Q13 19.65 13 18v-8q0-1.65 1.175-2.825Q15.35 6 17 6q1.65 0 2.825 1.175Q21 8.35 21 10v8q0 1.65-1.175 2.825Q18.65 22 17 22ZM5 15h4v-1.5H7.25q-.3 0-.525-.225-.225-.225-.225-.525 0-.3.225-.525Q6.95 12 7.25 12H9v-1.5H7.25q-.3 0-.525-.225Q6.5 10.05 6.5 9.75q0-.3.225-.525Q6.95 9 7.25 9H9V7.5H5V15Zm10 1h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedFilled.displayName = 'AmauiIconMaterialMixtureMedFilled';

export default IconMaterialMixtureMedFilled;
