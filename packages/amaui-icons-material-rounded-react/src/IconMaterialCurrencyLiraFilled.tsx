import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyLiraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyLiraFilled'

      short_name='CurrencyLira'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-.425 0-.712-.288Q9 20.425 9 20v-4.15l-1.475.925q-.5.325-1.012.025Q6 16.5 6 15.9q0-.275.125-.5.125-.225.35-.35L9 13.475v-2.35l-1.475.925q-.5.3-1.012.025Q6 11.8 6 11.2q0-.275.125-.5.125-.225.325-.35L9 8.75V4q0-.425.288-.713Q9.575 3 10 3t.713.287Q11 3.575 11 4v3.5l2.475-1.55q.5-.325 1.013-.038Q15 6.2 15 6.8q0 .275-.125.5-.125.225-.35.35L11 9.875v2.35l2.475-1.55q.5-.3 1.013-.025.512.275.512.875 0 .275-.125.5-.125.225-.35.35L11 14.6V19q1.85 0 3.225-1.175t1.7-2.925q.075-.4.35-.65.275-.25.65-.25.45 0 .75.325t.25.75q-.375 2.55-2.325 4.237Q13.65 21 11 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyLiraFilled.displayName = 'AmauiIconMaterialCurrencyLiraFilled';

export default IconMaterialCurrencyLiraFilled;
