import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultilineChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultilineChartW100'

      short_name='MultilineChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.4 11.6-5.7 5.75q-.1.125-.237.125-.138 0-.263-.125t-.112-.25q.012-.125.112-.25l5.675-5.725Q9.1 10.9 9.4 10.9q.3 0 .525.225l3.425 3.425 3.85-4.3q-1.55-1.8-3.487-2.85-1.938-1.05-4.163-1.05-1.625 0-3.087.525Q5 7.4 3.725 8.3q-.125.1-.3.112-.175.013-.275-.112-.1-.125-.062-.275.037-.15.162-.25Q4.6 6.75 6.188 6.2q1.587-.55 3.362-.55 2.3 0 4.35 1.062 2.05 1.063 3.75 2.988l2.65-2.975q.1-.125.25-.125t.275.125q.1.1.1.225t-.1.25l-2.775 3.1q.725 1.1 1.25 2.4.525 1.3.8 2.65.05.175-.012.338-.063.162-.263.162-.175 0-.263-.112-.087-.113-.137-.288-.225-1.05-.687-2.225-.463-1.175-1.138-2.375l-3.725 4.125q-.225.25-.537.25-.313 0-.538-.225Z"/>
    </Icon>
  );
});

IconMaterialMultilineChartW100.displayName = 'AmauiIconMaterialMultilineChartW100';

export default IconMaterialMultilineChartW100;
